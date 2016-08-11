import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2FilterPipeAppComponent, environment } from './app/';
// import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

if (environment.production) {
  enableProdMode();
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [Ng2FilterPipeAppComponent],
  bootstrap: [Ng2FilterPipeAppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})

class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
