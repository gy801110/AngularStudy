import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FactoryProviderComponent } from './app/factory-provider.component';
import { CarService, Speedmeter, Engine } from './app/car.service';


@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-factory-provider', component: FactoryProviderComponent }
        ] )],
    exports: [RouterModule],
    declarations: [FactoryProviderComponent],
    providers: [CarService, Speedmeter, Engine]
})
export class Chapter8Sample2 { }