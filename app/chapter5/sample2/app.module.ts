import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OopComponent } from './app/oop.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'oop-cmp', component: OopComponent }
        ] )],
    declarations: [
        , OopComponent
    ],
})
export class Chapter5Sample2 {}