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
var InterpolationComponent = (function () {
    function InterpolationComponent() {
        this.basket = {
            items: ['apple', 'grapee', 'orange']
        };
        this.myclass = "my-italic";
        var x = '굿';
        var y = '바이';
        this.goodbye = "" + (x + y);
    }
    InterpolationComponent.prototype.hello = function () { return "hello"; };
    return InterpolationComponent;
}());
InterpolationComponent = __decorate([
    core_1.Component({
        selector: 'app-interpolation',
        template: "\n  {{1 + 1}} <br>\n  {{hello()+\" world!\"}} <br>\n  {{hello()===\"hello\"?\"YES\":\"NO\"}} <br>\n  {{basket.items[0]}} <br>\n  {{goodbye}} <br>\n\n  <input type=\"text\" value=\"{{myclass}}\">\n  <button class=\"{{myclass}}\">{{myclass}}</button>",
        styles: ["\n  .my-italic { font-style: italic; }"]
    }),
    __metadata("design:paramtypes", [])
], InterpolationComponent);
exports.InterpolationComponent = InterpolationComponent;
//# sourceMappingURL=interpolation.component.js.map