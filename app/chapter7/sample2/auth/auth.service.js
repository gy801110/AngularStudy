"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var User = (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var USERS = [
    new User(1, '첫번째 사용자'),
    new User(2, '두번째 사용자'),
    new User(3, '세번째 사용자')
];
exports.userPromise = Promise.resolve(USERS);
var AuthService = (function () {
    function AuthService() {
        this.isLogin = false;
    }
    AuthService.prototype.checkId = function (userId) {
        return exports.userPromise
            .then(function (children) { return children.find(function (children) { return children.id === +userId; }); });
    };
    AuthService.prototype.login = function (userId) {
        var _this = this;
        return Observable_1.Observable.of(true).delay(500).do(function (val) { return _this.isLogin = true; }).do(function (val) { return _this.userId = userId; });
    };
    AuthService.prototype.logout = function () {
        this.isLogin = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map