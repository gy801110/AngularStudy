import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hello1Component } from './chapter3/sample1/helloAngular';
import { Hello2Component } from './chapter3/sample1/hello.component';
import ComponentOne from './chapter3/sample2/component-one';
import ComponentTwo from './chapter3/sample2/component-two';

import { NestedParentComponent } from './chapter4/sample3/parent.component';
import { NestedChildComponent } from './chapter4/sample3/child.component';
import { NestedGrandsonComponent } from './chapter4/sample3/grandson.component';
import { ParentToChildInputComponent } from './chapter4/sample4/parent-to-child-input.component';
import { ChildInputComponent } from './chapter4/sample4/child-input.component';
import { ChildToParentComponent } from './chapter4/sample5/child-to-parent.component';
import { ChildComponent } from './chapter4/sample5/child.component';

export const appRoutes: Routes = [
    { path: 'hello1', component: Hello1Component }
    , { path: 'hello2', component: Hello2Component }
    , { path: 'component-one', component: ComponentOne }
    , { path: 'component-two/:id', component: ComponentTwo }
    , { path: 'nested-parent', component: NestedParentComponent }
    , { path: 'nested-child', component: NestedChildComponent }
    , { path: 'nested-grandson', component: NestedGrandsonComponent }
    , { path: 'parent-to-child-input', component: ParentToChildInputComponent }
    , { path: 'app-root', component: ChildToParentComponent }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot( appRoutes );