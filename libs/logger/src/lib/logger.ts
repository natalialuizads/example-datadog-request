import { getServiceDataDog } from './utils/getServiceDataDog';

export class Logger {

  info(message: string,   context?: Record<string, unknown>) {
   this.log(message, 'info', context);
  }

  error(message: string, context?: Record<string, unknown>) {
    this.log(message, 'error', context);
  }

  warn(message: string, context?: Record<string, unknown>) {
    this.log(message, 'warn', context);
  }

  debug(message: string, context?: Record<string, unknown>) {
    this.log(message, 'debug', context);
  }

  private log(message: string, type: string, context?: Record<string, unknown>) {
    getServiceDataDog('DD_LOGS') && getServiceDataDog('DD_LOGS').logger.log(message, type, context);
  }
}
