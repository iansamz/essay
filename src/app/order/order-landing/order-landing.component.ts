import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { OrderLandingService }  from '../orderLanding.service';
import { Order1 } from '../../classes/order1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-landing',
  templateUrl: './order-landing.component.html',
  styleUrls: ['./order-landing.component.css']
})
export class OrderLandingComponent implements OnInit, OnDestroy {

  private serviceSelected : FormControl;
  private pagesSelected : FormControl;
  private paperSelected : FormControl;
  private academicLevelSelected : FormControl;
  private urgencySelected : FormControl;
  orderForm: FormGroup;
  optionsValue : number;
  ifResume : boolean = true;
  orderPrice : number;
  multiplierA : number;
  multiplierB : number;
  multiplierC : number;
  order : Order1 ;
  typeService : any;
  typeQ :any;
  servicesA: object;
  papersA : object;
  academicLevelA : object;
  urgencyA : object;
  
  constructor(public orderLandingService: OrderLandingService, private router : Router) { }

  ngOnInit() {
    this.servicesA = this.orderLandingService.servicesA;
    this.papersA = this.orderLandingService.papersA;
    this.academicLevelA = this.orderLandingService.academicLevelA;
    this.urgencyA = this.orderLandingService.urgencyA;
    this.serviceSelected = new FormControl(0);
    this.paperSelected = new FormControl(0);
    this.pagesSelected = new FormControl(1, CustomValidators.digits);
    this.academicLevelSelected = new FormControl(1);
    this.urgencySelected = new FormControl(1);
    this.orderForm = new FormGroup({
      service : this.serviceSelected,
      paper : this.paperSelected,
      pages : this.pagesSelected,
      academicLevel : this.academicLevelSelected,
      urgency : this.urgencySelected
    });

    this.optionsValue = this.orderForm.get('service').value;
    this.calculatePrice();

    this.typeService = "Papers";
    this.typeQ = "Pages";
  }


  ngOnDestroy(){
    this.orderLandingService.orderTaken = this.order;
  }
  
  goOrder(){
    this.order = {
      service : this.orderForm.get('service').value,
      paper : this.orderForm.get('paper').value,
      pages : this.orderForm.get('pages').value,
      academicLevel : this.orderForm.get('academicLevel').value,
      urgency : this.orderForm.get('urgency').value
    }
    this.router.navigateByUrl('/order');
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
    
    this.orderPrice = (this.servicesA[this.optionsValue]["price"])*this.multiplierA*this.multiplierB*this.multiplierC;
    return this.orderPrice;
  }
}
