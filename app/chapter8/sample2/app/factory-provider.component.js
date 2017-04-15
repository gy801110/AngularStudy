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
var car_service_1 = require("./car.service");
var car_service_provider_1 = require("./car.service.provider");
var FactoryProviderComponent = (function () {
    function FactoryProviderComponent(carService) {
        this.carService = carService;
    }
    return FactoryProviderComponent;
}());
FactoryProviderComponent = __decorate([
    core_1.Component({
        selector: 'app-factory-provider',
        template: "\n  <div>\uC5D4\uC9C4\uC774\uB984 : {{carService.engine.name}}</div>\n  <div>\uD604\uC7AC\uC18D\uB3C4 : {{carService.speedmeter.speed}} km/h</div>\n  <div>\uCD5C\uB300\uC18D\uB3C4 : {{carService.speedmeter.maxSpeed}} km/h</div>",
        providers: [car_service_provider_1.FactoryProvider]
    }),
    __metadata("design:paramtypes", [car_service_1.CarService])
], FactoryProviderComponent);
exports.FactoryProviderComponent = FactoryProviderComponent;
//# sourceMappingURL=factory-provider.component.js.map