import { NgModule }     from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { FourComponent } from './four/four.component';

import { AuthGuardService } from './auth-guard.service';
import { AdminGuardService } from './admin-guard.service';
import { ReAuthGuardService } from './reauth-guard.service';
import { ReAdminGuardService } from './readmin-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: 'home', component: LandingComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'order', loadChildren: './order/order.module#OrderModule'},
            { path: 'auth', loadChildren: './auth/auth.module#AuthModule',canLoad:[ReAuthGuardService]},
            { path: 'admin', loadChildren: './admin-dash/admin-dash.module#AdminDashModule', canLoad:[AdminGuardService] },
            { path: 'dashboard', loadChildren: './client-dash/client-dash.module#ClientDashModule', canLoad:[AuthGuardService] },
            { path: '404', component:FourComponent }, //loadChildren: './four-o-four/four.module#Module404'},
            { path: '**', redirectTo:'404' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}