import { NextResponse } from "next/server";

interface SuccessResponse<T> {
  success: true;
  data: T;
  meta?: Record<string, unknown>;
}

interface ErrorResponseBody {
  success: false;
  error: string;
  details?: unknown;
}

export function successResponse<T>(
  data: T,
  status = 200,
  meta?: Record<string, unknown>
): NextResponse<SuccessResponse<T>> {
  const body: SuccessResponse<T> = { success: true, data };
  if (meta) body.meta = meta;
  return NextResponse.json(body, { status });
}

export function errorResponse(
  message: string,
  status = 400,
  details?: unknown
): NextResponse<ErrorResponseBody> {
  const body: ErrorResponseBody = { success: false, error: message };
  if (details) body.details = details;
  return NextResponse.json(body, { status });
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export function paginationMeta(params: PaginationParams) {
  const { page, limit, total } = params;
  return {
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  };
}

export function parsePagination(searchParams: URLSearchParams) {
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = Math.min(
    100,
    Math.max(1, parseInt(searchParams.get("limit") || "12", 10))
  );
  const offset = (page - 1) * limit;
  return { page, limit, offset };
}
