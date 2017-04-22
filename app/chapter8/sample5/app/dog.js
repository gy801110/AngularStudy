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
var Config = (function () {
    function Config() {
        this.walking = '쫄랑쫄랑';
    }
    return Config;
}());
exports.Config = Config;
var Dog = (function () {
    function Dog(config) {
        this.config = config;
    }
    Dog.prototype.walking = function () {
        return this.config.walking;
    };
    Dog.prototype.getName = function () {
        return "강아지";
    };
    return Dog;
}());
Dog = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Config])
], Dog);
exports.Dog = Dog;
var Pet = (function (_super) {
    __extends(Pet, _super);
    function Pet(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        return _this;
    }
    Pet.prototype.run = function () {
        return this.config.walking;
    };
    Pet.prototype.getName = function () {
        return "애완견";
    };
    return Pet;
}(Dog));
Pet = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Config])
], Pet);
exports.Pet = Pet;
//# sourceMappingURL=dog.js.map