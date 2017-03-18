import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hello1Component } from './sample1/helloAngular';
import { Hello2Component } from './sample1/hello.component';

import ComponentOne from './sample2/component-one';
import ComponentTwo from './sample2/component-two';

//import { NestedParentComponent }   from './sample3/parent.component';
//import { NestedChildComponent }    from './sample3/child.component';
//import { NestedGrandsonComponent } from './sample3/grandson.component';


export const appRoutes: Routes = [
    { path: 'hello1', component: Hello1Component }
    , { path: 'hello2', component: Hello2Component }
    , { path: 'component-one', component: ComponentOne }
    , { path: 'component-two/:id', component: ComponentTwo }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot( appRoutes );