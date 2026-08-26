import { NextRequest } from "next/server";
import { z } from "zod/v4";
import { db } from "@/lib/db";
import { reviews, products, users } from "@/lib/db/schema";
import { authenticate, isAuthError } from "@/lib/auth/middleware";
import {
  successResponse,
  errorResponse,
  parsePagination,
  paginationMeta,
} from "@/lib/api/response";
import { eq, sql, desc, and } from "drizzle-orm";

const createReviewSchema = z.object({
  productId: z.number().int().positive(),
  rating: z.number().int().min(1).max(5),
  title: z.string().max(200).optional(),
  comment: z.string().max(2000).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const { page, limit, offset } = parsePagination(searchParams);
    const productId = searchParams.get("product_id");

    if (!productId) {
      return errorResponse("product_id is required", 400);
    }

    const pid = parseInt(productId, 10);
    if (isNaN(pid)) {
      return errorResponse("Invalid product_id", 400);
    }

    const items = await db
      .select({
        id: reviews.id,
        rating: reviews.rating,
        title: reviews.title,
        comment: reviews.comment,
        createdAt: reviews.createdAt,
        userName: users.name,
        userAvatar: users.avatar,
      })
      .from(reviews)
      .innerJoin(users, eq(reviews.userId, users.id))
      .where(eq(reviews.productId, pid))
      .orderBy(desc(reviews.createdAt))
      .limit(limit)
      .offset(offset)
      .all();

    const countResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(reviews)
      .where(eq(reviews.productId, pid))
      .get();

    const avgResult = await db
      .select({ avg: sql<number>`avg(${reviews.rating})` })
      .from(reviews)
      .where(eq(reviews.productId, pid))
      .get();

    const total = countResult?.count ?? 0;

    return successResponse(items, 200, {
      ...paginationMeta({ page, limit, total }),
      averageRating: avgResult?.avg ?? 0,
      totalReviews: total,
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
    const parsed = createReviewSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const { productId, rating, title, comment } = parsed.data;

    const product = await db
      .select({ id: products.id })
      .from(products)
      .where(eq(products.id, productId))
      .get();

    if (!product) {
      return errorResponse("Product not found", 404);
    }

    const existingReview = await db
      .select({ id: reviews.id })
      .from(reviews)
      .where(
        and(eq(reviews.userId, auth.userId), eq(reviews.productId, productId))
      )
      .get();

    if (existingReview) {
      return errorResponse("You already reviewed this product", 409);
    }

    const review = await db
      .insert(reviews)
      .values({ userId: auth.userId, productId, rating, title, comment })
      .returning()
      .get();

    const stats = await db
      .select({
        count: sql<number>`count(*)`,
        avg: sql<number>`avg(${reviews.rating})`,
      })
      .from(reviews)
      .where(eq(reviews.productId, productId))
      .get();

    if (stats) {
      await db
        .update(products)
        .set({
          reviewCount: stats.count,
          rating: Math.round((stats.avg ?? 0) * 10) / 10,
        })
        .where(eq(products.id, productId))
        .run();
    }

    return successResponse(review, 201);
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
