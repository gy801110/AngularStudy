import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';

import { loginRoutes, authProviders } from './login.routing';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth/auth-guard.service';

import { IntroComponent } from './intro.component';
import { NotFoundComponent } from './not-found.component';
import { HelloComponent } from './hello/hello.component';
import { FirstPageComponent } from './pages/first-page.component';
import { SecondPageComponent } from './pages/second-page.component';
import { ThirdPageComponent } from './pages/third-page.component';
import { RouterLinkTestComponent } from './router-link-test/router-link-test.component';
import { HrefTestComponent } from './router-link-test/href-test.component';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin/admin.component';

// Config
let hashLocationStrategy: boolean = false;

const helloRoutes: Routes = [
    { path: 'intro', component: IntroComponent },
    { path: 'hello', component: HelloComponent },
    { path: 'router-link-test', component: RouterLinkTestComponent },
    { path: 'href-test', component: HrefTestComponent },
    { path: 'pages/first-page', component: FirstPageComponent },
    { path: 'pages/second-page', component: SecondPageComponent },
    { path: 'pages/third-page', component: ThirdPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent }
];

const lazyRoutes: Routes = [
    {
        path: 'lazy',
        loadChildren: 'app/chapter7/sample2/player/player.module#PlayerModule',
        canLoad: [AuthGuard]
    }
];

const appRoutes: Routes = [
    ...loginRoutes,
    ...lazyRoutes,
    ...helloRoutes,
    { path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [
    authProviders,
    CanDeactivateGuard
];
if ( hashLocationStrategy ) {
    appRoutingProviders.push( { provide: LocationStrategy, useClass: HashLocationStrategy });
}

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot( appRoutes );