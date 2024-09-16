
export class sessionStorageForMicroFront {


  setItem(config: any) {
    config.applicationUrl = this.formatURL(config.applicationUrl);

    const listMicroFrontend = this.listMicroFrontendSessionStorage();

    const index = listMicroFrontend.findIndex((item: any) => item.applicationUrl === config.applicationUrl);

    if (index !== -1) {
      listMicroFrontend[index] = config;
    } else {
      listMicroFrontend.push(config);
    }

    sessionStorage.setItem('logger', JSON.stringify(listMicroFrontend));
  }

  getItem(url: string) {
    url = this.formatURL(url);

    const listMicroFrontend = this.listMicroFrontendSessionStorage();

    return listMicroFrontend.find((item: any) => item.applicationUrl === url);
  }

  private listMicroFrontendSessionStorage() {
    const loggerData = sessionStorage.getItem('logger');
    return loggerData ? JSON.parse(loggerData) : [];
  }

  private formatURL(url: string): string {
    return url.endsWith('/') ? url.slice(0, -1) : url;
  }
}
