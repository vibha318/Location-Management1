const log4js = require("log4js");

log4js.configure({
  appenders: { errorLog: { type: "file", filename: "errorLog.log" } },
  categories: { default: { appenders: ["errorLog"], level: "error" } },
});

const logger = log4js.getLogger("errorLog");

function logError(err) {
  logger.error(err);
}

module.exports = { logError };
