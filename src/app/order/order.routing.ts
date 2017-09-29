import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { NewComponent } from './new/new.component';

import { AuthGuardService } from '../auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'new',
                pathMatch: 'full'
            },
            {
                path: '',
                component: OrderComponent,
                children: [
                    {
                        path: 'new',
                        component: NewComponent
                    },
                    {
                        path: 'success/:uid/:order',
                        component: OrderSuccessComponent,
                        // canActivateChild: [AuthGuardService]
                    },
                    {
                        path: 'failed',
                        component: OrderFailedComponent,
                        // canActivateChild:[AuthGuardService]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class OrderRoutingModule {
}