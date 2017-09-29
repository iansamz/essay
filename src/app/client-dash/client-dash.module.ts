import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientRoutingModule } from './client.routing';

import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientDashComponent } from './client-dash.component';
import { ClientService } from './client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    ClientRoutingModule
  ],
  declarations: [OrdersComponent, SettingsComponent, ClientDashComponent],
  providers: [ClientService]
})
export class ClientDashModule { }
