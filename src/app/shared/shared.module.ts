import { NgModule,ModuleWithProviders } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
// import { OrderLandingService } from './orderLanding.service'

@NgModule({
  declarations: [LoaderComponent],
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
