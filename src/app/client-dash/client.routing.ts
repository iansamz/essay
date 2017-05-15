import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDashComponent } from './client-dash.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ClientDashComponent,
                children: [
                    {
                        path: 'orders',
                        component: OrdersComponent,
                    },
                    {
                        path: 'settings',
                        component: SettingsComponent,
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ClientRoutingModule {
}