import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { datadogExampleLib } from '@angular-monorepo/logger';

datadogExampleLib.init({
  datadog: {
    rum: {
      clientToken: 'pub1ec0e0b06dcdb2236b050fc012f710b0',
      applicationId: 'c7b36edf-c814-414a-a098-e2fa7c10168b',
      site: 'datadoghq.com',
      service: 'test',
      env: 'development',
      version: '1.0.0',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 0,
      trackResources: true,
      trackLongTasks: true,
      trackUserInteractions: true,
    },
    logs: {
      clientToken: 'pubae5a1bef1cb45bddacaca1f1f87cc90a',
      service: 'test',
      site: 'datadoghq.com',
      forwardErrorsToLogs: true,
      sessionSampleRate: 100,
    },
  }
});



bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
