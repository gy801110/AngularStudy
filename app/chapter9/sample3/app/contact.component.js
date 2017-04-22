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
var ContactComponent = (function () {
    function ContactComponent() {
        this.save = new core_1.EventEmitter();
    }
    ContactComponent.prototype.handleClick = function (name, tele) {
        this.save.next({ name: name, telephone: tele });
    };
    return ContactComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ContactComponent.prototype, "save", void 0);
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contactinput',
        template: "\n    <div><input #contactname type=\"text\" placeholder=\"\uC774\uB984\" /></div>\n    <div><input #contacttele type=\"text\" placeholder=\"\uC804\uD654\uBC88\uD638\" /></div>\n    <button (click)=\"handleClick(contactname.value, contacttele.value)\">\uC800\uC7A5</button>"
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map