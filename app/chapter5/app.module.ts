import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Chapter5Sample1 } from './sample1/app.module';
import { Chapter5Sample2 } from './sample2/app.module';
import { Chapter5Sample3 } from './sample3/app.module';
import { Chapter5Sample4 } from './sample4/app.module';
import { Chapter5Sample5 } from './sample5/app.module';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , Chapter5Sample4
        , Chapter5Sample5]
})
export class Chapter5 {}