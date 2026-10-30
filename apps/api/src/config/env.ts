import "dotenv/config";

const requireEnv = (name: string): string => {
  const value = process.env[name];
  if (value === undefined || value === "") {
    throw new Error(`missing required environment variable ${name}`);
  }
  return value;
};

const parsePort = (raw: string): number => {
  const portPattern = /^\d+$/;
  if (!portPattern.test(raw)) {
    throw new Error(`Port= ${raw} is invalid, port value must be an integer`);
  }
  const port = Number(raw);
  if (port < 1 || port > 65535) {
    throw new Error(
      `PORT=${raw} is invalid, and its value must be between 1 and 65535`,
    );
  }
  return port;
};

export const config = {
  nodeEnv: requireEnv("NODE_ENV"),
  port: parsePort(requireEnv("PORT")),
  databaseUrl: requireEnv("DATABASE_URL"),
  jwtAccessSecret: requireEnv("JWT_ACCESS_SECRET"),
  jwtRefreshSecret: requireEnv("JWT_REFRESH_SECRET"),
  redisUrl: requireEnv("REDIS_URL"),
  logLevel: requireEnv("LOG_LEVEL"),
};
