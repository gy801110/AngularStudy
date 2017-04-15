import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //ngModel binding
//import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './chapter7/sample2/app.routing';

import { AppComponent } from './navi/navigator';
import { AppTopComponent } from './navi/navigator.top';

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

import { Chapter6Sample1 } from './chapter6/sample1/app.module';
import { Chapter6Sample2 } from './chapter6/sample2/app.module';

import { Chapter7Sample1 } from './chapter7/sample1/app.module';
import { ChildrenModule } from './chapter7/sample2/children.module';
import { AppLoginModule } from './chapter7/sample2/app.module';

import { Chapter8Sample1 } from './chapter8/sample1/app.module';
import { Chapter8Sample2 } from './chapter8/sample2/app.module';
import { Chapter8Sample3 } from './chapter8/sample3/app.module';

/* 라우터 설정. */
export const appRoutes: Routes = [
    { path: '', component: Hello1Component }
    , { path: 'hello1', component: Hello1Component }
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
    , { path: 'child1', component: ChildrenModule }
    /*, { path: 'login', component: AppLoginModule }*/
];

const routing = RouterModule.forRoot( appRoutes );

/* 모듈 설정. */
@NgModule( {
    imports: [
        BrowserModule, FormsModule, routing
        ,Chapter6Sample1 // chapter6.sample1
        ,Chapter6Sample2 // chapter6.sample2
        ,Chapter7Sample1 // chapter7.sample1
        ,ChildrenModule // chapter7.sample2
        //,AppLoginModule // chapter7.sample2
        ,Chapter8Sample1 // chapter8.sample1
        ,Chapter8Sample2 // chapter8.sample2
        ,Chapter8Sample3 // chapter8.sample3
    ],
    declarations: [
        AppComponent, AppTopComponent // Navigator
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
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor( @Optional() @SkipSelf() parentModule: AppModule ) {
        if ( parentModule ) {
            throw new Error( 'CoreModule이 이미 로딩되었습니다.' );
        }
        console.log( "AppModule이 시작되었습니다." );
    }
}