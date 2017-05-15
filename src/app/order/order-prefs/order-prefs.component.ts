import { Component, OnInit,Input ,Output ,EventEmitter } from '@angular/core';
import { Order2 } from '../../classes/order2';
import { Order3 } from '../../classes/order3';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-order-prefs',
  templateUrl: './order-prefs.component.html',
  styleUrls: ['./order-prefs.component.css']
})
export class OrderPrefsComponent implements OnInit {

  @Input() total : number;
  @Input() tab : any;
  @Output() nextTab = new EventEmitter();
  writerLevel : number = 1;
  originality : boolean = false;
  proofRead : boolean = false;
  summary : boolean = false;
  urgentWriter : boolean = false;
  draft : boolean = false;
  custService : number = 1;
  prevOrder : Order2;

  orig : number = 0;
  proof : number = 0;
  summa : number = 0;
  urgentW : number = 0;
  drft : number = 0;
  
  constructor(public orderService: OrderService) { 

  }

  ngOnInit() {
    
  }

  
  nextTab2(){
    this.tab = 2;
    this.nextTab.emit(this.tab);
  }

  onSubmit(formValues){
    let holder : Order3;
    holder = this.extend(this.orderService.order1,formValues);
    this.orderService.finalOrder =  holder;
    console.log(this.orderService.finalOrder);

    this.nextTab2()
  }

  ifOrig(){
    if (this.originality == true){
      this.orig= 29.99;
    }else{
      this.orig= 0;
    }
    this.calculatePrice();
  }
  ifProof(){
    if (this.proofRead == true){
      this.proof = (this.orderService.order1.pages*2.55)
    }else{
      this.proof = 0
    }
    this.calculatePrice();
  }
  ifSummary(){
    if (this.summary == true){
      this.summa = 14.99
    }else{
      this.summa = 0
    }
    this.calculatePrice();
  }
  ifUrg(){
    if (this.urgentWriter == true){
      this.urgentW = 9.99
    }else{
      this.urgentW = 0
    }
    this.calculatePrice();
  }
  ifDraft(){
    console.log(this.orderService.order1.orderPrice)
    if (this.draft == true){
      this.drft = (this.orderService.order1.orderPrice*1.15)
    }else{
      this.drft = 0
    }
    this.calculatePrice();
  }
  change(){ 
    this.calculatePrice();
  }
  calculatePrice(){
    let holder = this.orderService.order1.orderPrice;
    this.total = ((holder*this.writerLevel*this.custService)+this.orig+this.proof+this.summa+this.urgentW+this.drft)
  }
  extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
  }
}
