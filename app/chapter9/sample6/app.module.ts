import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgstyleComponent } from './app/ngstyle.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-ngstyle', component: NgstyleComponent }
        ] )],
    exports: [RouterModule],
    declarations: [NgstyleComponent],
    providers: []
})
export class Chapter9Sample6 { }