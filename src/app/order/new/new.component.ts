import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  tabAble1: boolean = false;
  tabAble2: boolean = false;
  currentTab : number = 0; 
  totalB : number;
  finalOrder : any = 0;
  ngOnInit() {
  }
  constructor() {}

  nextTab1(data){
    this.currentTab = data.tab;
    this.totalB = data.price;
    this.tabAble1 = true;
  }
  nextTab2(data){
    this.currentTab = data.tab;
    this.finalOrder = data.final;
    this.tabAble2 = true;
  }
}
