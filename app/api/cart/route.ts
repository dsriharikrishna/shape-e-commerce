import { NextRequest } from "next/server";
import { z } from "zod/v4";
import { db } from "@/lib/db";
import { cartItems, products } from "@/lib/db/schema";
import { authenticate, isAuthError } from "@/lib/auth/middleware";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq, and } from "drizzle-orm";

const addToCartSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().min(1).default(1),
  size: z.string().optional(),
  color: z.string().optional(),
});

const updateCartSchema = z.object({
  itemId: z.number().int().positive(),
  quantity: z.number().int().min(0),
});

const removeCartSchema = z.object({
  itemId: z.number().int().positive(),
});

export async function GET(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const items = await db
      .select({
        id: cartItems.id,
        quantity: cartItems.quantity,
        size: cartItems.size,
        color: cartItems.color,
        productId: products.id,
        title: products.title,
        price: products.price,
        imgSrc: products.imgSrc,
        inStock: products.inStock,
      })
      .from(cartItems)
      .innerJoin(products, eq(cartItems.productId, products.id))
      .where(eq(cartItems.userId, auth.userId))
      .all();

    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return successResponse({
      items,
      totalItems: items.length,
      totalAmount: Math.round(totalAmount * 100) / 100,
    });
  } catch {
    return errorResponse("Internal server error", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const body = await request.json();
    const parsed = addToCartSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const { productId, quantity, size, color } = parsed.data;

    const product = await db
      .select({ id: products.id })
      .from(products)
      .where(eq(products.id, productId))
      .get();

    if (!product) {
      return errorResponse("Product not found", 404);
    }

    const existing = await db
      .select()
      .from(cartItems)
      .where(
        and(
          eq(cartItems.userId, auth.userId),
          eq(cartItems.productId, productId)
        )
      )
      .get();

    if (existing) {
      const updated = await db
        .update(cartItems)
        .set({ quantity: existing.quantity + quantity })
        .where(eq(cartItems.id, existing.id))
        .returning()
        .get();
      return successResponse(updated);
    }

    const item = await db
      .insert(cartItems)
      .values({ userId: auth.userId, productId, quantity, size, color })
      .returning()
      .get();

    return successResponse(item, 201);
  } catch {
    return errorResponse("Internal server error", 500);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const body = await request.json();
    const parsed = updateCartSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const { itemId, quantity } = parsed.data;

    const item = await db
      .select()
      .from(cartItems)
      .where(and(eq(cartItems.id, itemId), eq(cartItems.userId, auth.userId)))
      .get();

    if (!item) {
      return errorResponse("Cart item not found", 404);
    }

    if (quantity === 0) {
      await db.delete(cartItems).where(eq(cartItems.id, itemId)).run();
      return successResponse({ message: "Item removed from cart" });
    }

    const updated = await db
      .update(cartItems)
      .set({ quantity })
      .where(eq(cartItems.id, itemId))
      .returning()
      .get();

    return successResponse(updated);
  } catch {
    return errorResponse("Internal server error", 500);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const body = await request.json();
    const parsed = removeCartSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const item = await db
      .select()
      .from(cartItems)
      .where(
        and(
          eq(cartItems.id, parsed.data.itemId),
          eq(cartItems.userId, auth.userId)
        )
      )
      .get();

    if (!item) {
      return errorResponse("Cart item not found", 404);
    }

    await db.delete(cartItems).where(eq(cartItems.id, parsed.data.itemId)).run();

    return successResponse({ message: "Item removed from cart" });
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
