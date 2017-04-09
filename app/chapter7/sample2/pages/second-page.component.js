"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SecondPageComponent = (function () {
    function SecondPageComponent() {
    }
    return SecondPageComponent;
}());
SecondPageComponent = __decorate([
    core_1.Component({
        selector: 'second-page',
        template: "<h3>\uB450\uBC88\uC9F8 \uD398\uC774\uC9C0</h3>\n  <a routerLink=\"/router-link-test\" routerLinkActive=\"active\">\uCC98\uC74C\uC73C\uB85C</a>"
    })
], SecondPageComponent);
exports.SecondPageComponent = SecondPageComponent;
//# sourceMappingURL=second-page.component.js.map