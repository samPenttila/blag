import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { BlagAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(BlagAppComponent);

