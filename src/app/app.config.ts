import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// IMPORTANTE: Asegúrate de que provideClientHydration NO esté aquí

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideClientHydration() <--- ELIMINALO COMPLETAMENTE
  ]
};
