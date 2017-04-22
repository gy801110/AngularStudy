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
var mock_service_1 = require("./mock.service");
var PromiseComponent = (function () {
    function PromiseComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.reqMessage = '';
        this.reqMessage2 = '';
        this.userService.getRequest(true).then(function (reason) { return _this.reqMessage = reason; });
        this.userService.getRequest(false).then(function (reason) { return _this.reqMessage2 = reason; });
        this.userService.getUser().then(function (user) { return _this.listUser = user; });
        this.userService.getUserDelay().then(function (user) { return _this.listUserDelay = user; });
    }
    return PromiseComponent;
}());
PromiseComponent = __decorate([
    core_1.Component({
        selector: 'promise',
        template: "\n  {{reqMessage}}<br>\n  {{reqMessage2}}<br><br>  \n  <list-component [list]=\"listUser\" [title]=\"'\uC774\uB984 \uCD9C\uB825 (\uC9C0\uC5F0\uC5C6\uC74C)'\"></list-component>\n  <list-component [list]=\"listUserDelay\" [title]=\"'\uC774\uB984 \uCD9C\uB825 (1\uCD08 \uC9C0\uC5F0)'\"></list-component>",
        providers: [mock_service_1.MockService]
    }),
    __metadata("design:paramtypes", [mock_service_1.MockService])
], PromiseComponent);
exports.PromiseComponent = PromiseComponent;
//# sourceMappingURL=promise.component.js.map