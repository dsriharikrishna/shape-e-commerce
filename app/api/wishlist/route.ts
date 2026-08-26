import { NextRequest } from "next/server";
import { z } from "zod/v4";
import { db } from "@/lib/db";
import { wishlistItems, products } from "@/lib/db/schema";
import { authenticate, isAuthError } from "@/lib/auth/middleware";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq, and } from "drizzle-orm";

const wishlistSchema = z.object({
  productId: z.number().int().positive(),
});

export async function GET(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const items = await db
      .select({
        id: wishlistItems.id,
        addedAt: wishlistItems.createdAt,
        productId: products.id,
        title: products.title,
        price: products.price,
        oldPrice: products.oldPrice,
        imgSrc: products.imgSrc,
        rating: products.rating,
        inStock: products.inStock,
      })
      .from(wishlistItems)
      .innerJoin(products, eq(wishlistItems.productId, products.id))
      .where(eq(wishlistItems.userId, auth.userId))
      .all();

    return successResponse(items);
  } catch {
    return errorResponse("Internal server error", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const body = await request.json();
    const parsed = wishlistSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const { productId } = parsed.data;

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
      .from(wishlistItems)
      .where(
        and(
          eq(wishlistItems.userId, auth.userId),
          eq(wishlistItems.productId, productId)
        )
      )
      .get();

    if (existing) {
      return errorResponse("Product already in wishlist", 409);
    }

    const item = await db
      .insert(wishlistItems)
      .values({ userId: auth.userId, productId })
      .returning()
      .get();

    return successResponse(item, 201);
  } catch {
    return errorResponse("Internal server error", 500);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const body = await request.json();
    const parsed = wishlistSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const item = await db
      .select()
      .from(wishlistItems)
      .where(
        and(
          eq(wishlistItems.userId, auth.userId),
          eq(wishlistItems.productId, parsed.data.productId)
        )
      )
      .get();

    if (!item) {
      return errorResponse("Item not in wishlist", 404);
    }

    await db.delete(wishlistItems).where(eq(wishlistItems.id, item.id)).run();

    return successResponse({ message: "Removed from wishlist" });
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
