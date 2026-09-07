// lib/utils/api.ts - API Response Helpers

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export class ApiError extends Error {
  constructor(
    public statusCode: number = 500,
    message: string = 'Internal Server Error'
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const createSuccessResponse = <T>(
  data: T,
  message?: string
): ApiResponse<T> => ({
  success: true,
  data,
  message,
});

export const createErrorResponse = (
  error: string,
  message?: string
): ApiResponse<never> => ({
  success: false,
  error,
  message,
});

export const createPaginatedResponse = <T>(
  data: T[],
  total: number,
  page: number = 1,
  pageSize: number = 10
): PaginatedResponse<T> => ({
  success: true,
  data,
  total,
  page,
  pageSize,
  totalPages: Math.ceil(total / pageSize),
});

export const handleApiError = (error: unknown) => {
  if (error instanceof ApiError) {
    return createErrorResponse(error.message);
  }

  if (error instanceof Error) {
    return createErrorResponse(
      'INTERNAL_ERROR',
      error.message || 'An unexpected error occurred'
    );
  }

  return createErrorResponse(
    'INTERNAL_ERROR',
    'An unexpected error occurred'
  );
};
