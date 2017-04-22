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
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
//팩토리패턴
var Factory = (function () {
    function Factory() {
    }
    // 객체 생성방법 결정
    Factory.prototype.create = function () {
        return this.careteAnimal(new animal_1.Config());
    };
    return Factory;
}());
var AnimalFactory = (function (_super) {
    __extends(AnimalFactory, _super);
    function AnimalFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 객체 설정방법 결정
    AnimalFactory.prototype.careteAnimal = function (config) {
        config.bark = "야옹야옹";
        config.name = "고양이";
        return new animal_1.Animal(config);
    };
    return AnimalFactory;
}(Factory));
exports.AnimalFactory = AnimalFactory;
function mainFactory() {
    var myAnimal = (new AnimalFactory()).create();
    return myAnimal;
}
exports.mainFactory = mainFactory;
//# sourceMappingURL=animal-factory.js.map