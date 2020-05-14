import pino from "pino";
import config from '../config'

const l = pino({
  name: config.appName,
  level: config.logLevel,
  base: { name: "name" },
});

export default l;