import { db } from "@/lib/db";
import { categories, products } from "@/lib/db/schema";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const items = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
        description: categories.description,
        imgSrc: categories.imgSrc,
        parentId: categories.parentId,
        productCount: sql<number>`(
          SELECT count(*) FROM ${products}
          WHERE ${products.categoryId} = ${categories.id}
        )`,
      })
      .from(categories)
      .orderBy(categories.name)
      .all();

    return successResponse(items);
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
