import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserServiceConfig, UserService } from './app/user.service';
import { TitleComponent } from './app/title.component';
import { CoreTestComponent } from './app/core-test.component';

@NgModule( {
    imports: [CommonModule
        , FormsModule
        , RouterModule.forChild( [
            { path: 'core-test', component: CoreTestComponent }
        ] )],
    declarations: [TitleComponent, CoreTestComponent],
    exports: [TitleComponent],
    providers: [UserService]
})
export class Chapter6Sample1 {
    constructor( @Optional() @SkipSelf() parentModule: Chapter6Sample1 ) {
        if ( parentModule ) {
            throw new Error( 'Chapter6Sample1이 이미 로딩되었습니다.' );
        }
        console.log( "Chapter6Sample1이 시작되었습니다." );
    }

    static forRoot( config: UserServiceConfig ): ModuleWithProviders {
        console.log( "Chapter6Sample1 forRoot." );
        return {
            ngModule: Chapter6Sample1,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}