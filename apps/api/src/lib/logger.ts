import pino from "pino";

import { config } from "../config/env";

// Kiểm tra xem có đang ở môi trường development không
const isDev = config.nodeEnv === "development";

// Cấu hình transport cho pino-pretty nếu ở môi trường development
const transport = isDev
  ? {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard", // Hiển thị định dạng thời gian dễ đọc
      },
    }
  : undefined;

// Khởi tạo instance logger duy nhất (Singleton)
const logger = pino({
  level: config.logLevel,
  transport,
});

export default logger;
