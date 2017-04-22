"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_injector_1 = require("./animal-injector");
var animal_injector_test_1 = require("./animal-injector-test");
var ReflectiveInjectorComponent = (function () {
    function ReflectiveInjectorComponent() {
        this.dog = animal_injector_1.dogInjector();
        this.config = animal_injector_1.configInjector();
        this.equalTest = animal_injector_test_1.equalTest();
        this.equalTestNew = animal_injector_test_1.equalTestNew();
        this.equalTestChild = animal_injector_test_1.equalTestChild();
        this.fromResolvedProvidersTest = animal_injector_test_1.fromResolvedProvidersTest();
    }
    return ReflectiveInjectorComponent;
}());
ReflectiveInjectorComponent = __decorate([
    core_1.Component({
        selector: 'app-reflective-injector',
        template: "\n  {{dog.getName()}}\uB294 {{dog.walking()}} <br>\n  {{config.walking}},  <br>\n  equalTest : {{equalTest}}<br>\n  equalTestNew : {{equalTestNew}}<br>  \n  equalTestChild : {{equalTestChild}}<br>\n  fromResolvedProvidersTest : {{fromResolvedProvidersTest}}\n  "
    })
], ReflectiveInjectorComponent);
exports.ReflectiveInjectorComponent = ReflectiveInjectorComponent;
//# sourceMappingURL=reflective-injector.component.js.map