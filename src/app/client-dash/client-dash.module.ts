import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientRoutingModule } from './client.routing';

import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientDashComponent } from './client-dash.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent, SettingsComponent, ClientDashComponent]
})
export class ClientDashModule { }
