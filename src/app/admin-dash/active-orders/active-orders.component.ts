import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.css']
})
export class ActiveOrdersComponent implements OnInit {
  arr = [];
  item: FirebaseListObservable<any>;
  item1 : FirebaseListObservable<any>;
  constructor(public db:AngularFireDatabase, public router: Router) { 
    
    this.item = db.list('/orders');
    this.item.subscribe(data=>{
      let array = []; 
      // loop through the client nodes under orders and create an array
      for (var i = 0; i < data.length; i++) {
        this.item1 = db.list('/orders/'+data[i].$key);
        this.item1.subscribe(data1=>{
          for(var x = 0; x <data1.length; x++){
            let a = array;
            array = this.appendObjTo(a, data1[x]);
            this.arr = array.filter(this.isCP);
          }
        });
      }
    });
  }

  ngOnInit() {
  }
  viewOrder(id,uid){
    this.router.navigateByUrl('admin/details'+'/'+ uid +'/'+ id);
  }
  getExp(dead){
    let today = new Date();
    let startDate = new Date(dead);
    let time = (startDate.getTime() - today.getTime())/3600000
    let hours = Math.trunc(time);
    let minutes = Math.floor((time -hours)*60);
    let days = Math.floor(hours/24);
    hours = hours%24;
    return days + "days : " +hours + "hours : " + minutes + " minutes";
  }
  
  appendObjTo(thatArray, objToAppend) {
    return Object.freeze(thatArray.concat(objToAppend));
  }

  isCP(order){
    return (order.isCompleted === false && order.isPaid ===true);
  }
}
