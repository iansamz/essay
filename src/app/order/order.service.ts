import { Injectable } from '@angular/core';
import { Order2 } from './../classes/order2'
import { Order3 } from './../classes/order3'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OrderService {
  order1 : Order2 ;
  finalOrder : Order3 ;
  
  constructor() { }
  getFinalOrder(){
    let Order = new Subject()
    Order.next(this.finalOrder)
    console.log(this.finalOrder)
    return Order;
  }
}
