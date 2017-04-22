import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OnewayExpressionComponent } from './app/oneway-expression.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-oneway-expression', component: OnewayExpressionComponent }
        ] )],
    exports: [RouterModule],
    declarations: [
        OnewayExpressionComponent
    ],
    providers: []
})
export class Chapter9Sample2 { }