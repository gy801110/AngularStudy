"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OnewayStatementComponent = (function () {
    function OnewayStatementComponent() {
        this.msg = "버튼을 선택해주세요";
        this.msg2 = "이름과 이메일을 입력해주세요";
        this.clicked = "버튼을 선택해주세요";
    }
    OnewayStatementComponent.prototype.greetings = function (msg) {
        this.msg = msg;
    };
    OnewayStatementComponent.prototype.saveContact = function (contact) {
        this.msg2 = JSON.stringify(contact);
    };
    return OnewayStatementComponent;
}());
OnewayStatementComponent = __decorate([
    core_1.Component({
        selector: 'app-oneway-statement',
        template: "\n  <h3>{{msg}}</h3>\n  <button (click)=\"greetings('\uC548\uB155\uD558\uC138\uC694');\">\uC548\uB155\uD558\uC138\uC694</button>\n  <button on-click=\"greetings('\uD658\uC601\uD569\uB2C8\uB2E4');\">\uD658\uC601\uD569\uB2C8\uB2E4</button><br><br>\n\n  <h3>{{msg2}}</h3> \n  <contactinput (save)=\"saveContact($event)\"></contactinput><br><br>\n  \n  <h3>{{clicked}}</h3>\n  <button (myClick)=\"clicked=$event\">\uD074\uB9AD</button>"
    })
], OnewayStatementComponent);
exports.OnewayStatementComponent = OnewayStatementComponent;
//# sourceMappingURL=oneway-statement.component.js.map