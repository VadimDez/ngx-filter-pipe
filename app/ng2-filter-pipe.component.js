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
var core_1 = require('@angular/core');
var ng2_filter_pipe_1 = require('./shared/ng2-filter.pipe');
var mdl_1 = require('./shared/mdl');
var Ng2FilterPipeAppComponent = (function () {
    function Ng2FilterPipeAppComponent() {
        this.objectsFilter = { test: 'value', num: 1, nested: { val: 1 } };
        this.objects = [
            {
                test: 'value',
                num: 1,
                nested: {
                    val: 1
                }
            },
            {
                test: 'value1',
                num: 12
            },
            {
                test: 'value2',
                num: 25
            },
            {
                test: 'value3',
                num: 111,
                nested: {
                    val: 2
                }
            }
        ];
        this.stringsFilter = 'a';
        this.strings = [
            'asd',
            'qwe',
            'zxc'
        ];
        this.numbersFilter = 1;
        this.numbers = [
            1,
            2,
            3,
            12,
            30,
            21,
            111
        ];
    }
    Ng2FilterPipeAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng2-filter-pipe-app',
            templateUrl: 'ng2-filter-pipe.component.html',
            styleUrls: ['ng2-filter-pipe.component.css'],
            directives: [mdl_1.MDL],
            pipes: [ng2_filter_pipe_1.Ng2FilterPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2FilterPipeAppComponent);
    return Ng2FilterPipeAppComponent;
}());
exports.Ng2FilterPipeAppComponent = Ng2FilterPipeAppComponent;
//# sourceMappingURL=../ng2-filter-pipe.component.js.map