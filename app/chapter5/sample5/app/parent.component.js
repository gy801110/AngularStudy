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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_service_1 = require("./shared.service");
var ParentComponent = (function () {
    function ParentComponent(s) {
        this.s = s;
        s.message = "hello";
        s.num = 100;
    }
    return ParentComponent;
}());
ParentComponent = __decorate([
    core_1.Component({
        selector: 'parent-component',
        template: "\n  \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8 : {{s.message}}||{{s.num}} <button (click)=\"s.message='parent'\">\uC120\uD0DD</button><br>\n  <car-component></car-component><br>\n  <taxi-component></taxi-component>",
        providers: [shared_service_1.SharedService]
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], ParentComponent);
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map