import { config } from "./config/env";
import { createApp } from "./app";
import logger from "./lib/logger";

const app = createApp();
app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`);
});
