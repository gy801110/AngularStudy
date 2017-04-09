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
var router_1 = require("@angular/router");
var RouterLinkTestComponent = (function () {
    function RouterLinkTestComponent(_router) {
        this._router = _router;
    }
    RouterLinkTestComponent.prototype.one = function () {
        this._router.navigateByUrl("/pages/first-page");
    };
    RouterLinkTestComponent.prototype.two = function () {
        this._router.navigate(['pages', 'second-page']);
    };
    RouterLinkTestComponent.prototype.three = function () {
        var url = this._router.createUrlTree(['pages', 'third-page']);
        this._router.navigateByUrl(url);
    };
    RouterLinkTestComponent.prototype.four = function () {
        var url = this._router.createUrlTree([{ segmentPath: 'third-page' }]);
        this._router.navigateByUrl(url);
    };
    return RouterLinkTestComponent;
}());
RouterLinkTestComponent = __decorate([
    core_1.Component({
        selector: 'router-link-test',
        template: "\n  <h3>/pages \uB85C \uC2DC\uC791</h3>\n  <a routerLink=\"/pages/first-page\">1</a> \n  <a routerLink=\"/pages/second-page\">2</a> \n  <a routerLink=\"/pages/third-page\">3</a> <br><br>\n  \n  <h3>../pages \uB85C \uC2DC\uC791</h3>\n  <a routerLink=\"../pages/first-page\">1</a>\n  <a routerLink=\"../pages/second-page\">2</a> \n  <a routerLink=\"../pages/third-page\">3</a> <br><br>\n\n  <h3>\uBA54\uC11C\uB4DC\uB97C \uC774\uC6A9</h3>\n  <button (click)=\"one()\">1. navigateByUrl</button>\n  <button (click)=\"two()\">2. navigate</button>\n  <button (click)=\"three()\">3. createUrlTree</button>\n  <button (click)=\"four()\">4. createUrlTree, segmentPath</button>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], RouterLinkTestComponent);
exports.RouterLinkTestComponent = RouterLinkTestComponent;
//# sourceMappingURL=router-link-test.component.js.map