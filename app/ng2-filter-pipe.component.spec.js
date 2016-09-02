"use strict";
var testing_1 = require('@angular/core/testing');
var ng2_filter_pipe_component_1 = require('../app/ng2-filter-pipe.component');
beforeEach(function () {
    testing_1.TestBed.configureTestingModule({
        providers: [ng2_filter_pipe_component_1.Ng2FilterPipeAppComponent]
    });
});
describe('App: Ng2FilterPipe', function () {
    it('should create the app', testing_1.inject([ng2_filter_pipe_component_1.Ng2FilterPipeAppComponent], function (app) {
        expect(app).toBeTruthy();
    }));
    // it('should have as title \'ng2-filter-pipe works!\'',
    //     inject([Ng2FilterPipeAppComponent], (app: Ng2FilterPipeAppComponent) => {
    //   expect(app.title).toEqual('ng2-filter-pipe');
    // }));
});
//# sourceMappingURL=../ng2-filter-pipe.component.spec.js.map