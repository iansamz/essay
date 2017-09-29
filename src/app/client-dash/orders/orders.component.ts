import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order :  FirebaseListObservable<any>;
  orderI : FirebaseListObservable<any>;
  orderC: FirebaseListObservable<any>;
  returnURL : string;
  date = new Date();
  constructor(public db : AngularFireDatabase, public af : AngularFireAuth) { 
    
  }

  ngOnInit() {
    this.getCurrentUser().subscribe(uid=>{

      this.returnURL = "https://localhost:4200/order/success/" + uid + '/' ;

      this.order= this.db.list('/orders/'+ uid) 

      this.orderC = this.db.list('/orders/'+ uid ,{
        query: {
        orderByChild: 'isCompleted',
        equalTo: true
        }
      });

      this.orderI = this.db.list('/orders/'+ uid,{
        query: {
        orderByChild: 'isCompleted',
        equalTo: false
        }
      });
    });
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
  getCurrentUser(){
    let authD = new Subject();
    this.af.authState.subscribe(auth => {
      if(auth !==null){
        authD.next(auth.uid)
      }
    });
    return authD
  }
  // delete(order.$key)
  deleteOrder(key :string){ 
    this.order.remove(key); 
  }
}
