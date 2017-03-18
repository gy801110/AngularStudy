"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NestedParentComponent = (function () {
    function NestedParentComponent() {
    }
    return NestedParentComponent;
}());
NestedParentComponent = __decorate([
    core_1.Component({
        selector: 'nested-parent',
        template: "\n  <div>\uBD80\uBAA8\n    <nested-child></nested-child>\n  </div>",
        styles: ['div{border: 2px solid #666;padding:10px;width:400px;height:200px;}']
    })
], NestedParentComponent);
exports.NestedParentComponent = NestedParentComponent;
//# sourceMappingURL=parent.component.js.map