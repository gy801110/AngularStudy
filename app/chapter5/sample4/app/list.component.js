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
var user_1 = require("./user");
var ListComponent = (function () {
    function ListComponent() {
    }
    return ListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ListComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], ListComponent.prototype, "list", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: 'list-component',
        template: "\n  <b>{{title}}</b>\n  <div *ngFor=\"let o of list\">\n      {{o.id}} | {{o.name}}\n  </div><br>",
    })
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map