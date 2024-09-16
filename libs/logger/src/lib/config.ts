import { getServiceDataDog } from './utils/getServiceDataDog';
import { sessionStorageForMicroFront } from './utils/sessionStorage';

const RUM_URL = 'https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js';
const LOGS_URL = 'https://www.datadoghq-browser-agent.com/us1/v5/datadog-logs.js';

export class Config {

  constructor(private sessionStorageForMicroFront: sessionStorageForMicroFront){}

  init(config: any){
    if(config.microFrontend){
      this.configureForMicroFront(config);
      return
    }

    this.configureApplication(config)
  }

  private configureApplication(config: any){
      if(config.datadog.rum){
        this.loadDatadogRum(config.datadog.rum);
      }

      if(config.datadog.logs){
        this.loadDataDogLogs(config.datadog.logs);
      }
  }

  private loadDatadogRum(config: any){
    const script = this.createScript(RUM_URL);

    script.onload = () => {
      this.loadConfigService('DD_RUM', config);
    }

    script.onerror = () => {
      console.error('Error loading Datadog RUM');
    }
  }

  private loadDataDogLogs(config: any){
    const script = this.createScript(LOGS_URL);

    script.onload = () => {
      this.loadConfigService('DD_LOGS', config);
    }

    script.onerror = () => {
      console.error('Error loading Datadog LOGS');
    }
  }

  private loadConfigService(type: 'DD_LOGS' | 'DD_RUM', config: any){
    getServiceDataDog(type).init({
      ...config,
      beforeSend: (event: any, context: any) => {
        const regex = /https?:\/\/[^\s]+(?:\/[^\s]*)*\//s;
        const currentUrl = window.location.origin;
        const contextUrlOrigin = context?.handlingStack?.match(regex)?.[0];
        const eventUrlOrigin = event?.error?.stack?.match(regex)?.[0];
        const originURL = eventUrlOrigin || contextUrlOrigin;
        const isDifferentUrlCurrent = !!originURL && (originURL !== currentUrl);

        if(isDifferentUrlCurrent){
         const mfe = this.sessionStorageForMicroFront.getItem(originURL);

          if(mfe){
            event.service = mfe.name;
            event.env = mfe.env;
            event.version = mfe.version;
          }
        }

        console.log('event', event);
        return true
      }
    });
  }

  private createScript(url: string){
    const script = document.createElement('script');
    script.src = url;

    const firstScript = document.head.getElementsByTagName('script')[0];

    if(firstScript){
      document.head.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    return script;
  }

  private configureForMicroFront(configuration: any){
    if(!getServiceDataDog('DD_LOGS') && !getServiceDataDog('DD_RUM')){
      console.warn('Datadog not configured');
    }

    this.sessionStorageForMicroFront.setItem(configuration);
  }

}
