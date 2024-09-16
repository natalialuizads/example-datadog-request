import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, NgZone, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    (globalThis as any).ngZone ? { provide: NgZone, useValue: (globalThis as any).ngZone } : [],
  ],
};
