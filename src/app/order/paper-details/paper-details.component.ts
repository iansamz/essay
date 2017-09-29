import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order1 } from '../../classes/order1';
import { Order2 } from '../../classes/order2';
import { OrderLandingService } from './../orderLanding.service';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-paper-details',
  templateUrl: './paper-details.component.html',
  styleUrls: ['./paper-details.component.css']
})
export class PaperDetailsComponent implements OnInit {

  service : any;
  paper : any;
  subject: any = 0;
  topic : any;
  orderDesc : any;
  format : any = 0;
  resources: any = 0;
  resNeed : any = 1;
  academicLevel : any;
  pages : any;
  writer : any = 1;
  urgency: any;
  order : Order1;
  orderPrice: number;
  optionsValue : number;
  servicesA: object;
  papersA : object;
  academicLevelsA : object;
  urgencysA : object;
  subjectsA : object;
  formatsA : object;
  ifResume : boolean = true;
  typeService : any;
  typeQ : any;
  time : any;
  multiplierA : number;
  multiplierB : number;
  multiplierC : number;
  multiplierD : number;
  ifRes : boolean = true;

  constructor(public orderLandingService : OrderLandingService,public orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderLandingService.orderTaken || {
      service : 0,
      paper : 0,
      pages : 1,
      academicLevel : 0,
      urgency : 0  
    };
    this.servicesA = this.orderLandingService.servicesA;
    this.papersA = this.orderLandingService.papersA;
    this.academicLevelsA = this.orderLandingService.academicLevelA;
    this.urgencysA = this.orderLandingService.urgencyA;
    this.subjectsA = this.orderLandingService.subjectsA;
    this.formatsA = this.orderLandingService.formatsA;

    this.service = this.order.service;
    this.paper = this.order.paper;
    this.academicLevel = this.order.academicLevel;
    this.pages = this.order.pages;
    this.urgency = this.order.urgency;
    
    this.optionsValue = this.order.service;
    this.checkPType();

    
    this.multiplierA = (this.academicLevelsA[this.optionsValue].array[this.academicLevel]["value"]);
    this.multiplierB = (this.urgencysA[this.optionsValue].array[this.urgency]["value"]); 
    this.multiplierC = this.pages;
    this.multiplierD = this.writer;
    
    this.orderPrice = (this.servicesA[this.optionsValue]["price"])*this.multiplierA*this.multiplierB*this.multiplierC*this.multiplierD;
  }
  change(value){
    this.optionsValue = value.service ;
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
    this.multiplierA = (this.academicLevelsA[this.optionsValue].array[value.academicLevel]["value"]);
    this.multiplierB = (this.urgencysA[this.optionsValue].array[value.urgency]["value"]); 
    this.multiplierC = value.pages;
    this.multiplierD = value.writer;
    
    this.orderPrice = (this.servicesA[this.optionsValue]["price"])*this.multiplierA*this.multiplierB*this.multiplierC*this.multiplierD;
    return this.orderPrice;
  }
  resNeeded() {
        this.ifRes = !this.ifRes;
  }

  onSubmit(formValues){
     this.orderService.order1 =  formValues;
     this.orderService.order1.orderPrice = this.orderPrice;
     this.nextTab1();
  }

  @Input() public tab : any;
  @Output() public nextTab = new EventEmitter();
  
  nextTab1(){
    this.tab = this.tab+1;

    this.nextTab.emit({tab:this.tab,price:this.orderPrice});
  }
  
}
