import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { datadogExampleLib } from '@angular-monorepo/logger';

datadogExampleLib.init({
  datadog: {
    rum: {
      clientToken: '',
      applicationId: '',
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
      clientToken: '',
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
