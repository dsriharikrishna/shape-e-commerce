import { NextRequest } from "next/server";
import { verifyToken, JWTPayload } from "@/lib/auth/jwt";
import { errorResponse } from "@/lib/api/response";

export async function authenticate(
  request: NextRequest
): Promise<JWTPayload | Response> {
  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return errorResponse("Authentication required", 401);
  }

  const token = authHeader.slice(7);

  try {
    return await verifyToken(token);
  } catch {
    return errorResponse("Invalid or expired token", 401);
  }
}

export function isAuthError(result: JWTPayload | Response): result is Response {
  return result instanceof Response;
}
