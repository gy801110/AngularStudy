import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //ngModel binding
//import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './navi/navigator';

import { Hello1Component } from './chapter3/sample1/helloAngular';
import { Hello2Component } from './chapter3/sample1/hello.component';

import ComponentOne from './chapter3/sample2/component-one';
import ComponentTwo from './chapter3/sample2/component-two';

import { NestedParentComponent } from './chapter4/sample1/parent.component';
import { NestedChildComponent } from './chapter4/sample1/child.component';
import { NestedGrandsonComponent } from './chapter4/sample1/grandson.component';
import { ParentToChildInputComponent } from './chapter4/sample2/parent-to-child-input.component';
import { ChildInputComponent } from './chapter4/sample2/child-input.component';

import { ChildToParentComponent } from './chapter4/sample3/child-to-parent.component';
import { ChildComponent } from './chapter4/sample3/child.component';
import { ViewchildComponent, Item, ItemComponent } from './chapter4/sample4/viewchild.component';

/* 라우터 설정. */
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
    , { path: 'app-view-child', component: ViewchildComponent }
];

const appRoutingProviders: any[] = [];
const routing = RouterModule.forRoot( appRoutes );

/* 모듈 설정. */
@NgModule( {
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent
        , Hello1Component, Hello2Component // chapter3.sample1
        , ComponentOne, ComponentTwo // chapter3.sample2
        , NestedParentComponent, NestedChildComponent, NestedGrandsonComponent // chapter4.sample1
        , ParentToChildInputComponent, ChildInputComponent // chapter4.sample2
        , ChildToParentComponent, ChildComponent // chapter4.sample3
        , ViewchildComponent, Item, ItemComponent // chapter4.sample4
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }