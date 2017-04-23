"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PassToDirectiveComponent = (function () {
    function PassToDirectiveComponent() {
        this.msg = "행복한 하루되세요";
    }
    return PassToDirectiveComponent;
}());
PassToDirectiveComponent = __decorate([
    core_1.Component({
        selector: 'app-pass-to-directive',
        template: "    \n  <input type=\"text\" [(ngModel)]=\"msg\">\n  <button myDirective [inputValue]=\"msg\" staticValue=\"\uC548\uB155\uD558\uC138\uC694\">\uC778\uC0AC\uB9D0 \uCD9C\uB825</button>"
    })
], PassToDirectiveComponent);
exports.PassToDirectiveComponent = PassToDirectiveComponent;
//# sourceMappingURL=pass-to-directive.component.js.map