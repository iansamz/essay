import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { OrderService } from '../order.service';
import { AuthService } from '../../auth/auth.service';
import { Subject } from 'rxjs/Subject';
import { Order3 } from '../../classes/order3'

@Component({
  selector: 'app-order-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() public final : any;
  orderPrice : any;
  ifUser: any;
  orderDb : FirebaseListObservable<any> //= this.db.list('/orders');
  Id : string;
  returnURL : string;
  orderI : Subject<any>;
  constructor(public os:OrderService, public as: AuthService, public db : AngularFireDatabase) { 
    
  }

  ngOnInit() {
    this.as.getCurrentUser().subscribe(auth=>{
      this.ifUser = auth; 
      let orderSearch = this.db.list('/orders/'+ auth, {
        query: {
        orderByChild: 'orderId',
        limitToLast: 1
        }
      });

      
      this.orderI = new Subject();
      orderSearch.subscribe((order)=>{
        if(order.length == 0){
          this.orderI.next(0);
        }else{
          this.orderI.next(order[0].orderId);
        }
      });
      this.orderI.subscribe(data=>{
        this.Id = (data + 1);
        this.returnURL = "https://localhost:4200/order/success/" + auth + '/' + this.Id;
        
      });
      this.orderDb = this.db.list('/orders/'+ auth);
      
    });
    
    
  }
  ngOnChanges(){
    let t = this.final
  }
  ngAfterViewInit(){

  }
  saveData(){
    this.as.af.authState.subscribe(auth=>{
      this.os.finalOrder.clientUid = auth.uid;
      this.os.finalOrder.clientEmail = auth.email;
      this.os.finalOrder.orderId = +(this.Id);
      this.orderDb.push(this.os.finalOrder);
    });
  }
}