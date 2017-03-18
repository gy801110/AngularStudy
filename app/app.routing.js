"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var helloAngular_1 = require("./chapter3/sample1/helloAngular");
var hello_component_1 = require("./chapter3/sample1/hello.component");
var component_one_1 = require("./chapter3/sample2/component-one");
var component_two_1 = require("./chapter3/sample2/component-two");
var parent_component_1 = require("./chapter4/sample3/parent.component");
var child_component_1 = require("./chapter4/sample3/child.component");
var grandson_component_1 = require("./chapter4/sample3/grandson.component");
var parent_to_child_input_component_1 = require("./chapter4/sample4/parent-to-child-input.component");
var child_to_parent_component_1 = require("./chapter4/sample5/child-to-parent.component");
exports.appRoutes = [
    { path: 'hello1', component: helloAngular_1.Hello1Component },
    { path: 'hello2', component: hello_component_1.Hello2Component },
    { path: 'component-one', component: component_one_1.default },
    { path: 'component-two/:id', component: component_two_1.default },
    { path: 'nested-parent', component: parent_component_1.NestedParentComponent },
    { path: 'nested-child', component: child_component_1.NestedChildComponent },
    { path: 'nested-grandson', component: grandson_component_1.NestedGrandsonComponent },
    { path: 'parent-to-child-input', component: parent_to_child_input_component_1.ParentToChildInputComponent },
    { path: 'app-root', component: child_to_parent_component_1.ChildToParentComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map