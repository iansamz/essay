import { Component, OnInit,OnDestroy } from '@angular/core';
import { OrderLandingService }  from '../orderLanding.service';
import { Order1 } from '../../classes/order1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-landing',
  templateUrl: './order-landing.component.html',
  styleUrls: ['./order-landing.component.css']
})
export class OrderLandingComponent implements OnInit, OnDestroy {

  service : any;
  pages : any;
  paper : any;
  academicLevel : any;
  urgency : any;
  optionsValue : number;
  ifResume : boolean = true;
  orderPrice : number;
  multiplierA : number;
  multiplierB : number;
  multiplierC : number;
  multiplierD : number;
  order : Order1 ;
  typeService : any;
  typeQ :any;
  servicesA: object;
  papersA : object;
  academicLevelA : object;
  urgencyA : object;
  
  constructor(public orderLandingService: OrderLandingService, public router : Router) { }

  ngOnInit() {
    this.servicesA = this.orderLandingService.servicesA;
    this.papersA = this.orderLandingService.papersA;
    this.academicLevelA = this.orderLandingService.academicLevelA;
    this.urgencyA = this.orderLandingService.urgencyA;
    this.service = 0;
    this.paper = 0;
    this.pages = 1;
    this.academicLevel = 0;
    this.urgency = 0;
    
    this.optionsValue = this.service;
    
    this.multiplierA = (this.academicLevelA[this.optionsValue].array[this.academicLevel]["value"]);
    this.multiplierB = (this.urgencyA[this.optionsValue].array[this.urgency]["value"]); 
    this.multiplierC = this.pages;
    this.multiplierD = (this.servicesA[this.optionsValue]["price"]);
    this.orderPrice = this.multiplierD*this.multiplierA*this.multiplierB*this.multiplierC;

    this.typeService = "Papers";
    this.typeQ = "Pages";
  }


  ngOnDestroy(){
    this.orderLandingService.orderTaken = this.order;
  }
  
  goOrder(value){
    this.order = {
      service : value.service,
      paper : value.paper,
      pages : value.pages,
      academicLevel : value.academicLevel,
      urgency : value.urgency
    }
    this.router.navigateByUrl('/order/new');
  }

  change(value){
    
    this.optionsValue = value.service;

    this.checkResume();
    this.checkPType();
    this.calculatePrice(value);
    

  }
  checkPType(){
    if(this.optionsValue == 2 ){ 
      this.typeService = "Problems";
      this.typeQ = "Problems";
    }else if(this.optionsValue == 9){
      this.typeService = "Questions";
      this.typeQ = "Questions";
    }else{
      this.typeService = "Papers";
      this.typeQ = "Pages";
    }
    return this.typeService,this.typeQ;
  }

  checkResume(){
    if(this.optionsValue !== 8){
      this.ifResume = true;
    } else{
      this.ifResume = false;
    }
    return this.ifResume;
  }

  calculatePrice(value){
    this.multiplierA = (this.academicLevelA[this.optionsValue].array[value.academicLevel]["value"]);
    this.multiplierB = (this.urgencyA[this.optionsValue].array[value.urgency]["value"]); 
    this.multiplierC = value.pages;
    this.multiplierD = (this.servicesA[this.optionsValue]["price"]);
    
    this.orderPrice = this.multiplierD*this.multiplierA*this.multiplierB*this.multiplierC;
    return this.orderPrice;
  }
}
