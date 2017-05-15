import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPrefsComponent } from './order-prefs.component';

describe('OrderPrefsComponent', () => {
  let component: OrderPrefsComponent;
  let fixture: ComponentFixture<OrderPrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
