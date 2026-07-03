// src/shared/lib/env.ts

function getEnvVariable(
  name: string,
  fallback?: string,
): string {
  const value = process.env[name] ?? fallback;

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`,
    );
  }

  return value;
}

export const env = {
  app: {
    name: getEnvVariable(
      "NEXT_PUBLIC_APP_NAME",
      "Bharani Portfolio",
    ),
  },

  site: {
    url: getEnvVariable(
      "NEXT_PUBLIC_SITE_URL",
      "https://portfolio-backend-ovqj.onrender.com/api/v1",
    ),
  },

  api: {
    url: getEnvVariable(
      "NEXT_PUBLIC_API_URL",
      "https://portfolio-backend-ovqj.onrender.com/api/v1",
    ),
  },

  isDevelopment:
    process.env.NODE_ENV === "development",

  isProduction:
    process.env.NODE_ENV === "production",

  isTest:
    process.env.NODE_ENV === "test",
} as const;

export type Env = typeof env;