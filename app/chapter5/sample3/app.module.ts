import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MockComponent } from './app/mock.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'mock-test', component: MockComponent }
        ] )],
    declarations: [
        MockComponent
    ],
})
export class Chapter5Sample3 {}