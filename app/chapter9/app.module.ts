import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Chapter9Sample1 } from './sample1/app.module';
import { Chapter9Sample2 } from './sample2/app.module';
import { Chapter9Sample3 } from './sample3/app.module';
import { Chapter9Sample4 } from './sample4/app.module';
import { Chapter9Sample5 } from './sample5/app.module';
import { Chapter9Sample6 } from './sample6/app.module';

@NgModule( {
    imports: [
        CommonModule
        , FormsModule
        , Chapter9Sample1
        , Chapter9Sample2
        , Chapter9Sample3
        , Chapter9Sample4
        , Chapter9Sample5
        , Chapter9Sample6
    ]
})
export class Chapter9 {}