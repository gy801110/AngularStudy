import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Chapter10Sample1 } from './sample1/app.module';
import { Chapter10Sample2 } from './sample2/app.module';

@NgModule( {
    imports: [
        CommonModule
        , FormsModule
        , Chapter10Sample1
        , Chapter10Sample2
    ]
})
export class Chapter10 {}