"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_user_1 = require("./mock-user");
var MockService = (function () {
    function MockService() {
    }
    MockService.prototype.getUser = function () {
        return Promise.resolve(mock_user_1.USERS);
    };
    MockService.prototype.getUserDelay = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
        })
            .then(function () { return _this.getUser(); });
    };
    MockService.prototype.getRequest = function (status) {
        if (status) {
            return Promise.resolve("요청을 승낙합니다.").then(function (reason) {
                return reason;
            }, function (reason) {
                return "NO";
            });
        }
        else {
            return Promise.reject("요청을 거부합니다.").then(function (reason) {
                return "YES";
            }, function (reason) {
                return reason;
            });
        }
    };
    return MockService;
}());
MockService = __decorate([
    core_1.Injectable()
], MockService);
exports.MockService = MockService;
//# sourceMappingURL=mock.service.js.map