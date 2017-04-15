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
var super_power_engine_service_1 = require("./super-power-engine.service");
var engine_service_1 = require("./engine.service");
var AliasedClassProviderComponent = (function () {
    function AliasedClassProviderComponent(engine, spEngine) {
        this.engine = engine;
        this.spEngine = spEngine;
        if (engine === spEngine) {
            this.result = "두 객체는 동일 객체입니다.";
        }
        else {
            this.result = "두 객체는 다른 객체입니다.";
            throw new Error('Error');
        }
    }
    return AliasedClassProviderComponent;
}());
AliasedClassProviderComponent = __decorate([
    core_1.Component({
        selector: 'app-aliased-class-provider',
        template: "\n  {{engine.name}}<br>\n  {{spEngine.name}}<br>\n  {{result}}",
        providers: [super_power_engine_service_1.SuperPowerEngine, { provide: engine_service_1.Engine, useExisting: super_power_engine_service_1.SuperPowerEngine }]
    }),
    __metadata("design:paramtypes", [engine_service_1.Engine, super_power_engine_service_1.SuperPowerEngine])
], AliasedClassProviderComponent);
exports.AliasedClassProviderComponent = AliasedClassProviderComponent;
//# sourceMappingURL=aliased-class-provider.component.js.map