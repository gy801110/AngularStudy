import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PromiseComponent } from './app/promise.component';
import { ListComponent } from './app/list.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'promise', component: PromiseComponent }
        ] )],
    declarations: [PromiseComponent, ListComponent],
})
export class Chapter5Sample4 {}