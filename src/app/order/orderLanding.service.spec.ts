import { TestBed, inject } from '@angular/core/testing';

import { OrderLandingService } from './orderLanding.service';

describe('OrderlandingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderLandingService]
    });
  });

  it('should ...', inject([OrderLandingService], (service: OrderLandingService) => {
    expect(service).toBeTruthy();
  }));
});
