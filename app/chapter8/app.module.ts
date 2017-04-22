import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Chapter8Sample1 } from './sample1/app.module';
import { Chapter8Sample2 } from './sample2/app.module';
import { Chapter8Sample3 } from './sample3/app.module';

@NgModule( {
    imports: [
        CommonModule
        , FormsModule
        , Chapter8Sample1
        , Chapter8Sample2
        , Chapter8Sample3
    ]
})
export class Chapter8 {}