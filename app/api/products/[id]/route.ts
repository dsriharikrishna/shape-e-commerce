import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { products, categories, reviews, users } from "@/lib/db/schema";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq, sql } from "drizzle-orm";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      return errorResponse("Invalid product ID", 400);
    }

    const product = await db
      .select({
        id: products.id,
        title: products.title,
        slug: products.slug,
        description: products.description,
        price: products.price,
        oldPrice: products.oldPrice,
        discount: products.discount,
        imgSrc: products.imgSrc,
        hoverImgSrc: products.hoverImgSrc,
        rating: products.rating,
        reviewCount: products.reviewCount,
        inStock: products.inStock,
        sku: products.sku,
        tags: products.tags,
        variants: products.variants,
        brand: products.brand,
        color: products.color,
        sizes: products.sizes,
        featured: products.featured,
        categoryId: products.categoryId,
        categoryName: categories.name,
        createdAt: products.createdAt,
      })
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id))
      .where(eq(products.id, productId))
      .get();

    if (!product) {
      return errorResponse("Product not found", 404);
    }

    const productReviews = await db
      .select({
        id: reviews.id,
        rating: reviews.rating,
        title: reviews.title,
        comment: reviews.comment,
        createdAt: reviews.createdAt,
        userName: users.name,
      })
      .from(reviews)
      .innerJoin(users, eq(reviews.userId, users.id))
      .where(eq(reviews.productId, productId))
      .all();

    const avgRating = await db
      .select({ avg: sql<number>`avg(${reviews.rating})` })
      .from(reviews)
      .where(eq(reviews.productId, productId))
      .get();

    const parsed = {
      ...product,
      tags: product.tags ? JSON.parse(product.tags) : [],
      variants: product.variants ? JSON.parse(product.variants) : [],
      sizes: product.sizes ? JSON.parse(product.sizes) : [],
    };

    return successResponse({
      ...parsed,
      reviews: productReviews,
      averageRating: avgRating?.avg ?? product.rating,
    });
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
