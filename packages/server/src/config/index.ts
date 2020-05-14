import dotenv from "dotenv";
dotenv.config();

import { default as cors } from "./cors";
import { default as express } from "./express";

export default {
  appName: process.env.APP_NAME || "@bankaccount/server",
  logLevel: process.env.LOG_LEVEL || "debug",
  consumerHeaderName: process.env.CONSUMER_HEADER_NAME || "x-consumer-username",
  metricsRoute: process.env.METRICS_ROUTE || "/stats",
  limitBodyParser: process.env.LIMIT_BODY_PARSER || "10mb",
  cors,
  express,
};
