import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './app/contact.component';
import { MyClickDirective } from './app/my-click.directive';
import { OnewayStatementComponent } from './app/oneway-statement.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'contactinput', component: ContactComponent }
            , { path: 'app-oneway-statement', component: OnewayStatementComponent }
        ] )],
    exports: [RouterModule],
    declarations: [
        ContactComponent,
        OnewayStatementComponent,
        MyClickDirective
    ],
    providers: []
})
export class Chapter9Sample3 { }