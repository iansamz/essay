import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component404 } from './four/404.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: Component404
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}