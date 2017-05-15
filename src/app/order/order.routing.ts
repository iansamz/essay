import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: OrderComponent
                // children: [
                //     {
                //         path: '',
                //         component: TasksListComponent
                //     },
                //     {
                //         path: ':id',
                //         component: TaskDetailComponent,
                //     }
                // ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class OrderRoutingModule {
}