import { NgModule }     from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: 'home', component: LandingComponent},
            { path: 'order', loadChildren: './order/order.module#OrderModule' },
            { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
            { path: 'Dashboard', loadChildren: './admin-dash/admin-dash.module#AdminDashModule' },
            { path: 'Admin', loadChildren: './client-dash/client-dash.module#ClientDashModule' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}