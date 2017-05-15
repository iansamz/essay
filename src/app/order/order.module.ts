import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order.routing';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { SharedModule } from '../shared/shared.module';
import { OrderLandingComponent } from './order-landing/order-landing.component';
import { OrderLandingService }  from './orderLanding.service';
import { PaperDetailsComponent } from './paper-details/paper-details.component';
import { OrderPrefsComponent } from './order-prefs/order-prefs.component';
import { ContactComponent } from './contact/contact.component';
import { OrderService } from './order.service';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AuthModule.forRoot()
  ],
  exports: [OrderLandingComponent],
  providers: [OrderService],
  declarations: [OrderComponent, OrderLandingComponent, PaperDetailsComponent, OrderPrefsComponent, ContactComponent]
})
export class OrderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OrderModule,
      providers: [OrderLandingService]
    };
  }
 }
