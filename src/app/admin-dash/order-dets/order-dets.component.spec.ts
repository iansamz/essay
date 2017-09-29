import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetsComponent } from './order-dets.component';

describe('OrderDetsComponent', () => {
  let component: OrderDetsComponent;
  let fixture: ComponentFixture<OrderDetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
