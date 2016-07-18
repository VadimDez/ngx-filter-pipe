"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var common_1 = require('@angular/common');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.Ng2FilterPipeAppComponent, [
    { provide: common_1.APP_BASE_HREF, useValue: '/' }
]);
//# sourceMappingURL=main.js.map