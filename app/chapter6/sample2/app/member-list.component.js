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
var member_service_1 = require("./member.service");
var MemberListComponent = (function () {
    function MemberListComponent(memberService) {
        this.memberService = memberService;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getMembers().then(function (members) {
            _this.members = members;
        });
        this.setAge("유비");
    };
    MemberListComponent.prototype.setAge = function (name) {
        var _this = this;
        this.name = name;
        this.memberService.getMember(name).then(function (member) {
            _this.age = member.age;
        });
    };
    return MemberListComponent;
}());
MemberListComponent = __decorate([
    core_1.Component({
        selector: 'member-list',
        template: "  \n  {{name}}\uC758 \uB098\uC774 : {{age}}<br>\n  <div *ngFor='let m of members' highlight (mouseover)=\"setAge(m.name)\">\n    {{m.name}} {{m.age}}      \n  </div>"
    }),
    __metadata("design:paramtypes", [member_service_1.MemberService])
], MemberListComponent);
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=member-list.component.js.map