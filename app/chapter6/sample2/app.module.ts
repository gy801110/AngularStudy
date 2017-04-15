import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MemberListComponent } from './app/member-list.component';
import { HighlightDirective } from './app/highlight.directive';
import { MemberRoutingModule } from './app/member-routing.module';
import { MemberService } from './app/member.service';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'member-list', component: MemberListComponent }
        ] )],
    declarations: [MemberListComponent, HighlightDirective],
    providers: [MemberService]
})
export class Chapter6Sample2 { }