import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2FilterPipeAppComponent, environment } from './app/';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2FilterPipeAppComponent, [
  { provide: APP_BASE_HREF, useValue: '/' }
]);

