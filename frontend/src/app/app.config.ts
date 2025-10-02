import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";

/**
 * Application configuration
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
  ],
};

