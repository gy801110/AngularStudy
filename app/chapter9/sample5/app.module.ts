import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgclassComponent } from './app/ngclass.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-ngclass', component: NgclassComponent }
        ] )],
    exports: [RouterModule],
    declarations: [NgclassComponent],
    providers: []
})
export class Chapter9Sample5 { }