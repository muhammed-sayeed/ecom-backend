import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },

  base: {
    pid: false,
  },

  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;