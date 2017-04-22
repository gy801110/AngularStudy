import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HelloComponent } from './app/hello.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'hello', component: HelloComponent }
        ] )],
    declarations: [
        HelloComponent // chapter5.sample1
    ],
})
export class Chapter5Sample1 {}