import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminRoutingModule } from './admin.routing';

import { AdminDashComponent } from './admin-dash.component'
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { DoneOrdersComponent } from './done-orders/done-orders.component';
import { OrderDetsComponent } from './order-dets/order-dets.component';
import { AdminService } from './admin.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AdminRoutingModule
  ],
  declarations: [ActiveOrdersComponent, DoneOrdersComponent, AdminDashComponent, OrderDetsComponent],
  providers: [AdminService]
})
export class AdminDashModule { }
