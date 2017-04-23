import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BindingToDirectiveComponent } from './app/binding-to-directive.component';
import { AlertDirective } from './app/alert.directive';
@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-binding-to-directive', component: BindingToDirectiveComponent }
        ] )],
    exports: [RouterModule],
    declarations: [
        BindingToDirectiveComponent
        , AlertDirective
    ],
    providers: []
})
export class Chapter10Sample2 { }