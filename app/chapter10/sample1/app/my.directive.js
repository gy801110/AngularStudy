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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var myDirective = (function () {
    function myDirective(staticValue) {
        this.staticValue = staticValue;
    }
    myDirective.prototype.onMouseClick = function () {
        alert("속성 바인딩 값 : " + this._inputValue + "\n속성 값 : " + this.staticValue);
    };
    Object.defineProperty(myDirective.prototype, "inputValue", {
        set: function (status) {
            this._inputValue = status;
        },
        enumerable: true,
        configurable: true
    });
    return myDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], myDirective.prototype, "inputValue", null);
myDirective = __decorate([
    core_1.Directive({
        selector: '[myDirective]',
        host: {
            '(click)': 'onMouseClick()'
        }
    }),
    __param(0, core_1.Attribute('staticValue')),
    __metadata("design:paramtypes", [String])
], myDirective);
exports.myDirective = myDirective;
//# sourceMappingURL=my.directive.js.map