import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InterpolationComponent } from './app/interpolation.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-interpolation', component: InterpolationComponent }
        ] )],
    exports: [RouterModule],
    declarations: [
        InterpolationComponent
    ],
    providers: []
})
export class Chapter9Sample1 { }