import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashComponent } from './admin-dash.component';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { DoneOrdersComponent } from './done-orders/done-orders.component';
import { OrderDetsComponent } from './order-dets/order-dets.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'active',
                pathMatch: 'full',
                canActivate : []
            },
            {
                path: '',
                component: AdminDashComponent,
                children: [
                    {
                        path: 'active',
                        component: ActiveOrdersComponent,
                    },
                    {
                        path: 'complete',
                        component: DoneOrdersComponent,
                    },
                    {
                        path: 'details/:uid/:id',
                        component: OrderDetsComponent,
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}