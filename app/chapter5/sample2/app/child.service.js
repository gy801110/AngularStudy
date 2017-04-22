"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var parent_service_1 = require("./parent.service");
var FirstChild = (function () {
    function FirstChild(parent) {
        this.parent = parent;
    }
    FirstChild.prototype.getData = function () {
        return [
            { Child: 'FirstChild 서비스' },
            { parent: this.parent.getName() }
        ];
    };
    return FirstChild;
}());
FirstChild = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [parent_service_1.Parent])
], FirstChild);
exports.FirstChild = FirstChild;
var SecondChild = (function (_super) {
    __extends(SecondChild, _super);
    function SecondChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondChild.prototype.getData = function () {
        return [
            { Child: 'SecondChild 서비스' },
            { parent: _super.prototype.getName.call(this) }
        ];
    };
    return SecondChild;
}(parent_service_1.Parent));
SecondChild = __decorate([
    core_1.Injectable()
], SecondChild);
exports.SecondChild = SecondChild;
//# sourceMappingURL=child.service.js.map