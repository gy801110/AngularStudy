"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ParentToChildInputComponent = ParentToChildInputComponent_1 = (function () {
    function ParentToChildInputComponent() {
        this.fruit1 = "사과";
        this.fruit3 = ['딸기', '포도', '참외'];
    }
    ParentToChildInputComponent.prototype.fruit2 = function () {
        return "배";
    };
    Object.defineProperty(ParentToChildInputComponent.prototype, "fruit6", {
        get: function () {
            return ParentToChildInputComponent_1.fruit5;
        },
        enumerable: true,
        configurable: true
    });
    return ParentToChildInputComponent;
}());
ParentToChildInputComponent.fruit5 = "수박"; // static 형은 곧바로 전달 불가    
ParentToChildInputComponent = ParentToChildInputComponent_1 = __decorate([
    core_1.Component({
        selector: 'parent-to-child-input',
        template: "<div>\uBD80\uBAA8\n              <child-input [name1]=\"fruit1\" [name2]=\"fruit2()\" [name3]=\"fruit3\" [name4]=\"1+1\" [name5]=\"fruit5\" [name6]=\"fruit6\"></child-input>\n          </div>",
        styles: ["div{border: 2px solid #666;padding:10px;width:400px;height:250px;}"]
    })
], ParentToChildInputComponent);
exports.ParentToChildInputComponent = ParentToChildInputComponent;
var ParentToChildInputComponent_1;
//# sourceMappingURL=parent-to-child-input.component.js.map