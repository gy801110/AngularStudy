import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MemberComponent } from './app/member.component';

@NgModule( {
  imports: [CommonModule
            , FormsModule
            , RouterModule.forChild( [
                { path: 'member', component: MemberComponent }
            ] )],
    declarations: [MemberComponent],
    providers: []
})
export class Chapter7Sample1 { }