"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Config2 = (function () {
    function Config2() {
        this.grade = [];
    }
    Config2.prototype.getInfo = function () { };
    return Config2;
}());
Config2 = __decorate([
    core_1.Injectable()
], Config2);
exports.Config2 = Config2;
var myConfig = {
    serviceName: '회원관리 서비스',
    grade: ['운영자', '정회원', '준회원'],
    getInfo: function () { return "<b>" + myConfig.serviceName + "</b>\uB294 <b>" + myConfig.grade + "</b> \uB4F1\uAE09\uC81C\uB85C \uC6B4\uC601\uD569\uB2C8\uB2E4."; }
};
exports.ValueProvider = {
    provide: Config2,
    useValue: myConfig
};
//# sourceMappingURL=value.provider.js.map