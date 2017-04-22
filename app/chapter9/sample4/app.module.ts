import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TwowayNgmodelComponent } from './app/twoway-ngmodel.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-twoway-ngmodel', component: TwowayNgmodelComponent }
        ] )],
    exports: [RouterModule],
    declarations: [TwowayNgmodelComponent],
    providers: []
})
export class Chapter9Sample4 { }