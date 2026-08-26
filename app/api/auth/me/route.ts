import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { authenticate, isAuthError } from "@/lib/auth/middleware";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const auth = await authenticate(request);
    if (isAuthError(auth)) return auth;

    const user = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        phone: users.phone,
        avatar: users.avatar,
        role: users.role,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(eq(users.id, auth.userId))
      .get();

    if (!user) {
      return errorResponse("User not found", 404);
    }

    return successResponse(user);
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
