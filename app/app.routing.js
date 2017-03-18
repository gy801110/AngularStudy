"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var helloAngular_1 = require("./sample1/helloAngular");
var hello_component_1 = require("./sample1/hello.component");
var component_one_1 = require("./sample2/component-one");
var component_two_1 = require("./sample2/component-two");
//import { NestedParentComponent }   from './sample3/parent.component';
//import { NestedChildComponent }    from './sample3/child.component';
//import { NestedGrandsonComponent } from './sample3/grandson.component';
exports.appRoutes = [
    { path: 'hello1', component: helloAngular_1.Hello1Component },
    { path: 'hello2', component: hello_component_1.Hello2Component },
    { path: 'component-one', component: component_one_1.default },
    { path: 'component-two/:id', component: component_two_1.default }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map