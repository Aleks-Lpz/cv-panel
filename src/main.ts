import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ɵNoopNgZone } from '@angular/core'; // Importamos la zona "vacía"

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    { provide: 'NgZone', useValue: new ɵNoopNgZone() } // Esto mata el error NG0908
  ]
}).catch((err) => console.error(err));
