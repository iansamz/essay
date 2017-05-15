import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  tabAble1: boolean = false;
  tabAble2: boolean = false;
  currentTab : number = 0; 
  totalB : number;
  ngOnInit() {
  }
  constructor() {}

  nextTab1(data){
    this.currentTab = data.tab;
    this.totalB = data.price;
    this.tabAble1 = true;
  }
  nextTab2(data){
    this.currentTab = data;
    this.tabAble2 = true;
  }
}
