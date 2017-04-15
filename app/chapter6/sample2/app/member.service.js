"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Member = (function () {
    function Member(name, age) {
        this.name = name;
        this.age = age;
    }
    return Member;
}());
exports.Member = Member;
var MEMBERS = [
    new Member('유비', 30),
    new Member('관우', 29),
    new Member('장비', 28)
];
var MemberService = (function () {
    function MemberService() {
    }
    MemberService.prototype.getMembers = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(MEMBERS); }, 500);
        });
    };
    MemberService.prototype.getMember = function (name) {
        return this.getMembers()
            .then(function (members) { return members.find(function (member) { return member.name == name; }); });
    };
    return MemberService;
}());
MemberService = __decorate([
    core_1.Injectable()
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map