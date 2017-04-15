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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserServiceConfig = (function () {
    function UserServiceConfig() {
        this.nickName = '';
    }
    return UserServiceConfig;
}());
exports.UserServiceConfig = UserServiceConfig;
var UserService = (function () {
    function UserService(config) {
        this._nickName = '';
        console.log("UserServiceConfig...");
        if (config) {
            this._nickName = config.nickName;
        }
    }
    Object.defineProperty(UserService.prototype, "nickName", {
        get: function () {
            return this._nickName;
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [UserServiceConfig])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map