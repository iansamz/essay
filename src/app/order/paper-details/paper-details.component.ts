import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  orderForm : FormGroup;
  private serviceSelected : FormControl;
  private paperSelected: FormControl;
  private subjectSelected: FormControl;
  private topicSelected: FormControl;
  private orderDescSelected: FormControl;
  private formatSelected: FormControl;
  private resourcesSelected: FormControl;
  private resNeedSelected: FormControl;
  private academicLevelSelected: FormControl;
  private pagesSelected: FormControl;
  private writerSelected: FormControl;
  private urgencySelected: FormControl;
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
  typeQ :any;
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
      academicLevel : 1,
      urgency : 1
    };
    this.servicesA = this.orderLandingService.servicesA;
    this.papersA = this.orderLandingService.papersA;
    this.academicLevelsA = this.orderLandingService.academicLevelA;
    this.urgencysA = this.orderLandingService.urgencyA;
    this.subjectsA = this.orderLandingService.subjectsA;
    this.formatsA = this.orderLandingService.formatsA;
    this.optionsValue = this.order.service;
    this.serviceSelected = new FormControl(this.order.service);
    this.paperSelected = new FormControl(this.order.paper);
    this.subjectSelected = new FormControl(0);
    this.topicSelected = new FormControl("",Validators.required);
    this.orderDescSelected = new FormControl("",Validators.required);
    this.formatSelected = new FormControl(0);
    this.resourcesSelected = new FormControl(0);
    this.resNeedSelected = new FormControl(1);
    this.academicLevelSelected = new FormControl(this.order.academicLevel);
    this.pagesSelected = new FormControl(this.order.pages);
    this.writerSelected = new FormControl(1);
    this.urgencySelected = new FormControl(this.order.urgency);
    this.orderForm = new FormGroup({
      service : this.serviceSelected,
      paper : this.paperSelected,
      subject: this.subjectSelected,
      topic : this.topicSelected,
      orderDesc : this.orderDescSelected,
      format : this.formatSelected,
      resources: this.resourcesSelected,
      resNeed : this.resNeedSelected,
      academicLevel : this.academicLevelSelected,
      pages : this.pagesSelected,
      writer : this.writerSelected,
      urgency: this.urgencySelected
    });

    this.optionsValue = this.orderForm.get('service').value;
    this.checkPType();
    this.calculatePrice();
  }
  change(value){
    
    this.optionsValue = this.orderForm.get('service').value;
    this.checkResume();
    this.checkPType();
    this.calculatePrice();
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

  calculatePrice(){
    this.multiplierA = this.orderForm.get('academicLevel').value;
    this.multiplierB = this.orderForm.get('urgency').value;
    this.multiplierC = this.orderForm.get('pages').value;
    this.multiplierD = this.orderForm.get('writer').value;
    
    this.orderPrice = (this.servicesA[this.optionsValue]["price"])*this.multiplierA*this.multiplierB*this.multiplierC*this.multiplierD;
    return this.orderPrice;
  }
  resNeed() {
        this.ifRes = !this.ifRes;
  }

  onSubmit(formValues){
     this.orderService.order1 =  formValues;
     this.orderService.order1.orderPrice = this.orderPrice;
     this.nextTab1();
  }

  @Input() tab : any;
  @Output() nextTab = new EventEmitter();
  
  nextTab1(){
    this.tab = this.tab+1;

    this.nextTab.emit({tab:this.tab,price:this.orderPrice});
  }
  
}
