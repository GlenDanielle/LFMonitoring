//debugger logger
const winston = require('winston');

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  handleExceptions: true,
  humanReadableUnhandledException: true,
  transports: [
    new winston.transports.Console()
  ],
});

module.exports = logger