import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClassProviderComponent } from './app/class-provider.component';
import { AliasedClassProviderComponent } from './app/aliased-class-provider.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'app-class-provider', component: ClassProviderComponent },
            { path: 'app-aliased-class-provider', component: AliasedClassProviderComponent }
        ] )],
    exports: [RouterModule],
    declarations: [ClassProviderComponent
        , AliasedClassProviderComponent],
    providers: []
})
export class Chapter8Sample3 { }