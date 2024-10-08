import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { datadogExampleLib } from '@angular-monorepo/logger';

datadogExampleLib.init({
  microFrontend: true,
  name: 'mfe-footer',
  version: '2.3.0',
  env: 'development',
  applicationUrl: 'http://localhost:4203'
});

(async () => {
  const appRef: ApplicationRef  = await createApplication(appConfig);

  const tagElement = customElements.get('mfe-card');

  if(tagElement) return;

  const mfeCard = createCustomElement(AppComponent, {
    injector: appRef.injector
  });

  customElements.define('mfe-footer', mfeCard);
})();
