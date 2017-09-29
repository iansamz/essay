import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app.routing';

import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';

import 'hammerjs';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthGuardService } from './auth-guard.service'
import { AdminGuardService } from './admin-guard.service';
import { ReAuthGuardService } from './reauth-guard.service';
import { ReAdminGuardService } from './readmin-guard.service';
import { ContactComponent } from './contact/contact.component';
import { FourComponent } from './four/four.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    ContactComponent,
    FourComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AppRoutingModule,
    OrderModule.forRoot(),
    AuthModule.forRoot()
  ],
  providers: [AuthGuardService,AdminGuardService,ReAdminGuardService,ReAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
