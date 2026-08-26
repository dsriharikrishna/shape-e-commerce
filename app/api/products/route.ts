import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { products, categories } from "@/lib/db/schema";
import {
  successResponse,
  errorResponse,
  parsePagination,
  paginationMeta,
} from "@/lib/api/response";
import { eq, like, sql, and, gte, lte, desc, asc } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const { page, limit, offset } = parsePagination(searchParams);

    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");
    const brand = searchParams.get("brand");
    const inStock = searchParams.get("in_stock");
    const featured = searchParams.get("featured");
    const sortBy = searchParams.get("sort_by") || "createdAt";
    const sortOrder = searchParams.get("sort_order") || "desc";

    const conditions = [];

    if (search) {
      conditions.push(like(products.title, `%${search}%`));
    }
    if (category) {
      const cat = await db
        .select({ id: categories.id })
        .from(categories)
        .where(eq(categories.slug, category))
        .get();
      if (cat) {
        conditions.push(eq(products.categoryId, cat.id));
      }
    }
    if (minPrice) {
      conditions.push(gte(products.price, parseFloat(minPrice)));
    }
    if (maxPrice) {
      conditions.push(lte(products.price, parseFloat(maxPrice)));
    }
    if (brand) {
      conditions.push(eq(products.brand, brand));
    }
    if (inStock === "true") {
      conditions.push(eq(products.inStock, true));
    }
    if (featured === "true") {
      conditions.push(eq(products.featured, true));
    }

    const where = conditions.length > 0 ? and(...conditions) : undefined;

    const sortColumn =
      sortBy === "price"
        ? products.price
        : sortBy === "title"
          ? products.title
          : sortBy === "rating"
            ? products.rating
            : products.createdAt;
    const orderFn = sortOrder === "asc" ? asc : desc;

    const [items, countResult] = await Promise.all([
      db
        .select({
          id: products.id,
          title: products.title,
          slug: products.slug,
          price: products.price,
          oldPrice: products.oldPrice,
          discount: products.discount,
          imgSrc: products.imgSrc,
          hoverImgSrc: products.hoverImgSrc,
          rating: products.rating,
          reviewCount: products.reviewCount,
          inStock: products.inStock,
          brand: products.brand,
          featured: products.featured,
          categoryId: products.categoryId,
          categoryName: categories.name,
        })
        .from(products)
        .leftJoin(categories, eq(products.categoryId, categories.id))
        .where(where)
        .orderBy(orderFn(sortColumn))
        .limit(limit)
        .offset(offset),
      db
        .select({ count: sql<number>`count(*)` })
        .from(products)
        .where(where)
        .get(),
    ]);

    const total = countResult?.count ?? 0;

    return successResponse(items, 200, paginationMeta({ page, limit, total }));
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
