import express, { RequestHandler, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import swStats, { SWStats } from "swagger-stats";
import compression from "compression";
import config from "../config";
import logger from "../common/logger";

const server = express();

// Enable CORS
server.use(cors(config.cors));
server.options("*", cors(config.cors));

// Enable body parser
server.use(bodyParser.json({ limit: config.limitBodyParser }));

// Enable metrics
server.use(
  swStats.getMiddleware({
    uriPath: config.metricsRoute,
    prometheusTraceCallByUser: true,
    getUserName: (req: Request) =>
      req.header(config.consumerHeaderName) || "none",
  } as SWStats)
);
// Enable compression
server.use(compression());

export const createRouter = () => express.Router()
export const registerRouter = (path: string, router: RequestHandler<any>) =>
  server.use(path, router);

export const registerMiddleware = (middleware: RequestHandler<any>) =>
  server.use(middleware);

export const start = () => {
  server.listen(config.express.port, () => {
    logger.info(
      `Listening on http://${config.express.host}:${config.express.port}`
    );
  });
};
