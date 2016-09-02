"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var _1 = require('./app/');
// import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
var common_1 = require('@angular/common');
var ng2_filter_pipe_1 = require('./app/shared/ng2-filter.pipe');
var mdl_1 = require('./app/shared/mdl');
if (_1.environment.production) {
    core_1.enableProdMode();
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                _1.Ng2FilterPipeAppComponent,
                mdl_1.MDL,
                ng2_filter_pipe_1.Ng2FilterPipe
            ],
            bootstrap: [_1.Ng2FilterPipeAppComponent],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map