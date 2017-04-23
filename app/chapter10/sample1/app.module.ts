import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PassToDirectiveComponent } from './app/pass-to-directive.component';
import { myDirective } from './app/my.directive';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-pass-to-directive', component: PassToDirectiveComponent }
        ] )],
    exports: [RouterModule],
    declarations: [
        PassToDirectiveComponent
        , myDirective
    ],
    providers: [myDirective]
})
export class Chapter10Sample1 { }