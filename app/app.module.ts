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
import { ChildCmp, ViewchildrenComponent } from './chapter4/sample5/viewchildren.component';
import { GroupTitle, childButtonCmp, ButtonGroup, ContentChildComp } from './chapter4/sample6/contentchild.component';
import { Word, WordGroup, ContentChildrenComp } from './chapter4/sample7/contentchildren.component';
import { ComponentStyles } from './chapter4/sample8/component.styles.1';
import { ComponentStyleComponent } from './chapter4/sample9/component-style.component';
import { FirstDepthComponent } from './chapter4/sample9/first-depth.component';
import { SecondDepthComponent } from './chapter4/sample9/second-depth.component';

import { HelloComponent } from './chapter5/sample1/hello.component';
import { OopComponent } from './chapter5/sample2/oop.component';
import { MockComponent } from './chapter5/sample3/mock.component';

import { PromiseComponent } from './chapter5/sample4/promise.component';
import { ListComponent } from './chapter5/sample4/list.component';

import { ParentComponent } from './chapter5/sample5/parent.component';
import { TaxiComponent } from './chapter5/sample5/taxi.component';
import { CarComponent } from './chapter5/sample5/car.component';


/* 라우터 설정. */
export const appRoutes: Routes = [
    { path: '', component: Hello1Component }
    ,{ path: 'hello1', component: Hello1Component }
    , { path: 'hello2', component: Hello2Component }
    , { path: 'component-one', component: ComponentOne }
    , { path: 'component-two/:id', component: ComponentTwo }
    , { path: 'nested-parent', component: NestedParentComponent }
    , { path: 'nested-child', component: NestedChildComponent }
    , { path: 'nested-grandson', component: NestedGrandsonComponent }
    , { path: 'parent-to-child-input', component: ParentToChildInputComponent }
    , { path: 'app-root', component: ChildToParentComponent }
    , { path: 'app-view-child', component: ViewchildComponent }
    , { path: 'some-cmp', component: ViewchildrenComponent }
    , { path: 'app-contentchild', component: ContentChildComp }
    , { path: 'example-app', component: ContentChildrenComp }
    , { path: 'component-styles', component: ComponentStyleComponent }
    , { path: 'hello', component: HelloComponent }
    , { path: 'oop-cmp', component: OopComponent }
    , { path: 'mock-test', component: MockComponent }
    , { path: 'promise', component: PromiseComponent }
    , { path: 'parent-component', component: ParentComponent }
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
        , ChildCmp, ViewchildrenComponent // chapter4.sample5
        , GroupTitle, childButtonCmp, ButtonGroup, ContentChildComp // chapter4.sample6
        , Word, WordGroup, ContentChildrenComp // chapter4.sample7
        , ComponentStyles // cahter4.sample8
        , ComponentStyleComponent, FirstDepthComponent, SecondDepthComponent // chapter4.sample9
        , HelloComponent // chapter5.sample1
        , OopComponent // chapter5.sample2
        , MockComponent // Chapter5.sample3
        , PromiseComponent, ListComponent // Chapter5.sample4
        , ParentComponent, CarComponent, TaxiComponent // Chapter5.sample5
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }