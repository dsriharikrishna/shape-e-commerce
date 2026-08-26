import { NextRequest } from "next/server";
import { z } from "zod/v4";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { hashPassword } from "@/lib/auth/password";
import { signToken } from "@/lib/auth/jwt";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq } from "drizzle-orm";

const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  password: z.string().min(6).max(128),
  phone: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validation failed", 422, parsed.error.issues);
    }

    const { name, email, password, phone } = parsed.data;

    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email))
      .get();

    if (existing) {
      return errorResponse("Email already registered", 409);
    }

    const hashedPassword = await hashPassword(password);

    const result = await db
      .insert(users)
      .values({ name, email, password: hashedPassword, phone })
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
      })
      .get();

    const token = await signToken({
      userId: result.id,
      email: result.email,
      role: result.role,
    });

    return successResponse(
      { user: result, token },
      201
    );
  } catch {
    return errorResponse("Internal server error", 500);
  }
}
