import { Injectable } from '@angular/core';
import { Order2 } from './../classes/order2'
import { Order3 } from './../classes/order3'

@Injectable()
export class OrderService {
  order1 : Order2 ;
  finalOrder : Order3 
  // = {
  //   service : 0, 
  //   paper : 0,
  //   subject: 0,
  //   topic : "",
  //   orderDesc : "",
  //   format : 0,
  //   resources: 0,
  //   resNeed : 0,
  //   academicLevel : 0,
  //   pages : 0,
  //   writer : 0,
  //   urgency: 0,
  //   orderPrice: 0,
  //   writerLevel : 0,
  //   originality : 0,
  //   proofRead : 0,
  //   summary : 0,
  //   urgentWriter : 0,
  //   draft : 0,
  //   custService  : 0,
  // }
  constructor() { }
 
}
