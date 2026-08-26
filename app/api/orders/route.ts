import { NextRequest } from "next/server";
import { z } from "zod/v4";
import { db } from "@/lib/db";
import { orders, orderItems, cartItems, products } from "@/lib/db/schema";
import { authenticate, isAuthError } from "@/lib/auth/middleware";
import {
  successResponse,
  errorResponse,
  parsePagination,
  paginationMeta,
} from "@/lib/api/response";
import { eq, sql, desc } from "drizzle-orm";

const shippingAddressSchema = z.object({
  fullName: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(3),
  country: z.string().min(2),
  phone: z.string().min(5),
});

const createOrderSchema = z.object({
  shippingAddress: shippingAddressSchema,
  paymentMethod: z.enum(["card", "cod", "paypal", "bkash"]),
  notes: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const { searchParams } = new URL(request.url);
    const { page, limit, offset } = parsePagination(searchParams);

    const userOrders = await db
      .select({
        id: orders.id,
        status: orders.status,
        totalAmount: orders.totalAmount,
        paymentMethod: orders.paymentMethod,
        paymentStatus: orders.paymentStatus,
        createdAt: orders.createdAt,
        itemCount: sql<number>`(
          SELECT count(*) FROM ${orderItems}
          WHERE ${orderItems.orderId} = ${orders.id}
        )`,
      })
      .from(orders)
      .where(eq(orders.userId, auth.userId))
      .orderBy(desc(orders.createdAt))
      .limit(limit)
      .offset(offset)
      .all();

    const countResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(orders)
      .where(eq(orders.userId, auth.userId))
      .get();

    const total = countResult?.count ?? 0;

    return successResponse(
      userOrders,
      200,
      paginationMeta({ page, limit, total })
    );
  } catch {
    return errorResponse("Internal server error", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const body = await request.json();
    const parsed = createOrderSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const cart = await db
      .select({
        id: cartItems.id,
        productId: cartItems.productId,
        quantity: cartItems.quantity,
        size: cartItems.size,
        color: cartItems.color,
        price: products.price,
      })
      .from(cartItems)
      .innerJoin(products, eq(cartItems.productId, products.id))
      .where(eq(cartItems.userId, auth.userId))
      .all();

    if (cart.length === 0) {
      return errorResponse("Cart is empty", 400);
    }

    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const [order] = await db
      .insert(orders)
      .values({
        userId: auth.userId,
        totalAmount: Math.round(totalAmount * 100) / 100,
        shippingAddress: JSON.stringify(parsed.data.shippingAddress),
        paymentMethod: parsed.data.paymentMethod,
        notes: parsed.data.notes,
      })
      .returning();

    for (const item of cart) {
      await db.insert(orderItems).values({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color,
      });
    }

    await db.delete(cartItems).where(eq(cartItems.userId, auth.userId)).run();

    return successResponse(
      {
        order: {
          id: order.id,
          status: order.status,
          totalAmount: order.totalAmount,
          paymentMethod: order.paymentMethod,
          paymentStatus: order.paymentStatus,
          createdAt: order.createdAt,
        },
        itemCount: cart.length,
      },
      201
    );
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
