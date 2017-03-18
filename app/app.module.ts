import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //ngModel binding
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './navi/navigator';

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


@NgModule( {
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent
        , ComponentOne, ComponentTwo
        , Hello1Component, Hello2Component
        , NestedParentComponent, NestedChildComponent, NestedGrandsonComponent
        , ParentToChildInputComponent, ChildInputComponent
        , ChildToParentComponent, ChildComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }