"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_factory_1 = require("./animal-factory");
var FactoryComponent = (function () {
    function FactoryComponent() {
        this.animal1 = animal_factory_1.mainFactory();
        this.animal2 = animal_factory_1.mainFactory();
    }
    return FactoryComponent;
}());
FactoryComponent = __decorate([
    core_1.Component({
        selector: 'app-factory',
        template: "\n  {{animal1.getAnimalName()}} : {{animal1.getBark()}}<br>\n  {{animal2.getAnimalName()}} : {{animal2.getBark()}}<br>\n  {{animal1 === animal2}}\n  "
    })
], FactoryComponent);
exports.FactoryComponent = FactoryComponent;
//# sourceMappingURL=factory.component.js.map