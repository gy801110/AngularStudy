import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //ngModel binding
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './navi/navigator';

import { Hello1Component } from './sample1/helloAngular';
import { Hello2Component } from './sample1/hello.component';

import ComponentOne from './sample2/component-one';
import ComponentTwo from './sample2/component-two';

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
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }