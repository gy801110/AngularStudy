"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TwowayNgmodelComponent = (function () {
    function TwowayNgmodelComponent() {
        this.city = "seoul";
        this.cities = [
            { han: "서울", eng: "seoul" },
            { han: "대전", eng: "daejeon" },
            { han: "대구", eng: "daegu" },
            { han: "부산", eng: "pusan" }
        ];
    }
    return TwowayNgmodelComponent;
}());
TwowayNgmodelComponent = __decorate([
    core_1.Component({
        selector: 'app-twoway-ngmodel',
        template: "\n  <select [(ngModel)]=\"city\">\n        <option *ngFor=\"let obj of cities\" [value]=\"obj.eng\">{{obj.han}}</option>\n        </select>\n  <select (change)=\"city=$event.target.value\">\n          <option *ngFor=\"let obj of cities\" [value]=\"obj.eng\" [selected]=\"city==obj.eng?true:null\">\n          {{obj.han}}\n          </option>\n        </select><br>\n\n  <input [(ngModel)]=\"city\">\n  <input [value]=\"city\" (input)=\"city=$event.target.value\" ><br>\n  \n  <span *ngFor=\"let obj of cities\">\n          <input type=\"radio\" [checked]=\"(obj.eng==city?true:null)\" (click)=\"city=$event.target.value\" [value]=\"obj.eng\" name=\"city\">{{obj.han}}\n        </span>",
        styles: ["section{margin-bottom:20px;}"]
    })
], TwowayNgmodelComponent);
exports.TwowayNgmodelComponent = TwowayNgmodelComponent;
//# sourceMappingURL=twoway-ngmodel.component.js.map