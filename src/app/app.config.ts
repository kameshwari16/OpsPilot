import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { API_CONFIG } from './core/config/api-config.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(),
    {
      provide: API_CONFIG,
      useValue: {
        baseUrl: 'https://api.opspilot.com',
        timeoutMs: 5000,
        environment: 'development'
      }
    }
  ]
};
