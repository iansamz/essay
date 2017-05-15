import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashComponent } from './admin-dash.component';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { DoneOrdersComponent } from './done-orders/done-orders.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AdminDashComponent,
                children: [
                    {
                        path: 'active',
                        component: ActiveOrdersComponent,
                    },
                    {
                        path: 'successful',
                        component: DoneOrdersComponent,
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