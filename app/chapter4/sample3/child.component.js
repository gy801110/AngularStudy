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
var ChildComponent = (function () {
    function ChildComponent() {
        this.active = false;
        this.outputProperty = new core_1.EventEmitter();
    }
    ChildComponent.prototype.updateParent = function (active) {
        this.active = !active;
        this.outputProperty.emit(this.active);
    };
    return ChildComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "outputProperty", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child',
        template: "<div>\uC790\uC2DD <button (click)=\"updateParent(active)\">\uBD80\uBAA8\uC5D0\uAC8C \uC774\uBCA4\uD2B8\uBCF4\uB0B4\uAE30</button></div>",
        styles: ["div{border: 2px dotted #666;padding:10px;width:90%;height:50%;}"]
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map