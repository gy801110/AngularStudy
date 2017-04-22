import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ParentComponent } from './app/parent.component';
import { TaxiComponent } from './app/taxi.component';
import { CarComponent } from './app/car.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'parent-component', component: ParentComponent }
        ] )],
    declarations: [ParentComponent, CarComponent, TaxiComponent],
})
export class Chapter5Sample5 {}