import { NgModule,ModuleWithProviders } from '@angular/core';
// import { OrderLandingService } from './orderLanding.service'

@NgModule({
  declarations: [],
  providers: [  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
