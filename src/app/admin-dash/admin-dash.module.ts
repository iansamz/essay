import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminRoutingModule } from './admin.routing';

import { AdminDashComponent } from './admin-dash.component'
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { DoneOrdersComponent } from './done-orders/done-orders.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActiveOrdersComponent, DoneOrdersComponent, AdminDashComponent]
})
export class AdminDashModule { }
