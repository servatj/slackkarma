const winston = require('winston');

module.exports = (options) => {
  async function start({
    config
  }) {
    const logger = winston.createLogger({
      transports: [
        new winston.transports.File(config.file),
        new winston.transports.Console(config.console)
      ],
      exitOnError: true, // do not exit on handled exceptions
    });

    logger.stream = {
      write: function (message, encoding) {
        logger.info(message);
      },
    };

    return logger;
  }

  return {
    start
  }
}
