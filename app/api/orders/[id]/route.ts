import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { orders, orderItems, products } from "@/lib/db/schema";
import { authenticate, isAuthError } from "@/lib/auth/middleware";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq, and } from "drizzle-orm";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const { id } = await params;
    const orderId = parseInt(id, 10);

    if (isNaN(orderId)) {
      return errorResponse("Invalid order ID", 400);
    }

    const order = await db
      .select()
      .from(orders)
      .where(and(eq(orders.id, orderId), eq(orders.userId, auth.userId)))
      .get();

    if (!order) {
      return errorResponse("Order not found", 404);
    }

    const items = await db
      .select({
        id: orderItems.id,
        quantity: orderItems.quantity,
        price: orderItems.price,
        size: orderItems.size,
        color: orderItems.color,
        productId: products.id,
        title: products.title,
        imgSrc: products.imgSrc,
      })
      .from(orderItems)
      .innerJoin(products, eq(orderItems.productId, products.id))
      .where(eq(orderItems.orderId, orderId))
      .all();

    return successResponse({
      ...order,
      shippingAddress: JSON.parse(order.shippingAddress),
      items,
    });
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
