import { Logger } from './lib/logger';
import { Config } from './lib/config';
import { sessionStorageForMicroFront } from './lib/utils/sessionStorage';

export const datadogExampleLib = {
  init: (config: any) => {
    const configService = new Config(new sessionStorageForMicroFront());
    configService.init(config);
  },
  logger: new Logger()
}
