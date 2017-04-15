import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ValueProviderComponent } from './app/value-provider.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-value-provider', component: ValueProviderComponent }
        ] )],
    exports: [RouterModule],
    declarations: [ValueProviderComponent],
    providers: []
})
export class Chapter8Sample1 { }