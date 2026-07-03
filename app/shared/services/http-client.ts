// src/shared/services/http-client.ts

import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

import { env } from "@/app/shared/lib/env";

export interface ApiError {
  message: string;
  status: number;
  code?: string | undefined;
}

interface ErrorResponse {
  message?: string;
  code?: string;
}

export class HttpError extends Error {
  readonly status: number;

  readonly code?: string | undefined;

  constructor({
    message,
    status,
    code,
  }: ApiError) {
    super(message);

    this.name = "HttpError";
    this.status = status;

    if (code !== undefined) {
      this.code = code;
    }
  }
}

export const httpClient: AxiosInstance =
  axios.create({
    baseURL: env.api.url,
    timeout: 30_000,

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    withCredentials: false,
  });

/**
 * Request Interceptor
 */
httpClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response Interceptor
 */
httpClient.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(
        new HttpError({
          message:
            "Network error. Please check your internet connection.",
          status: 0,
        }),
      );
    }

    const status = error.response.status;

    const responseData =
      error.response.data as ErrorResponse;

    const message =
      responseData?.message ??
      error.message ??
      "Something went wrong.";

    return Promise.reject(
      new HttpError({
        message,
        status,
        ...(responseData?.code
          ? {
            code: responseData.code,
          }
          : {}),
      }),
    );
  },
);

/**
 * GET
 */
export async function get<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response =
    await httpClient.get<T>(
      url,
      config,
    );

  return response.data;
}

/**
 * POST
 */
export async function post<
  TResponse,
  TRequest = unknown,
>(
  url: string,
  data?: TRequest,
  config?: AxiosRequestConfig,
): Promise<TResponse> {
  const response =
    await httpClient.post<TResponse>(
      url,
      data,
      config,
    );

  return response.data;
}

/**
 * PUT
 */
export async function put<
  TResponse,
  TRequest = unknown,
>(
  url: string,
  data?: TRequest,
  config?: AxiosRequestConfig,
): Promise<TResponse> {
  const response =
    await httpClient.put<TResponse>(
      url,
      data,
      config,
    );

  return response.data;
}

/**
 * PATCH
 */
export async function patch<
  TResponse,
  TRequest = unknown,
>(
  url: string,
  data?: TRequest,
  config?: AxiosRequestConfig,
): Promise<TResponse> {
  const response =
    await httpClient.patch<TResponse>(
      url,
      data,
      config,
    );

  return response.data;
}

/**
 * DELETE
 */
export async function remove<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response =
    await httpClient.delete<T>(
      url,
      config,
    );

  return response.data;
}