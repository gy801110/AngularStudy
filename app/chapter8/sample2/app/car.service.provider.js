"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_service_1 = require("./car.service");
var carServiceFactory = function (speedmeter, engine) {
    speedmeter.speed = 100;
    speedmeter.maxSpeed = 500;
    engine.name = "슈퍼엔진";
    return new car_service_1.CarService(speedmeter, engine);
};
exports.FactoryProvider = {
    provide: car_service_1.CarService,
    useFactory: carServiceFactory,
    deps: [car_service_1.Speedmeter, car_service_1.Engine]
};
//# sourceMappingURL=car.service.provider.js.map