import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { OrderLandingService } from '../orderLanding.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  message : any = "Processing...";
  dash: boolean = false;
  orderDb : FirebaseListObservable<any>; //= this.db.list('/orders/');
  arr : any;
  urgencyA : any;
  orderSearch : any;
  date = new Date();
  date1 = new Date();
  hr : any
  orderI : any = new Subject();
  constructor(public as : AuthService, public db : AngularFireDatabase, public ar : ActivatedRoute, public router : Router, public ols : OrderLandingService) {
    this.urgencyA = this.ols.urgencyA;
    const hr : any = this.date1.getHours();
   }

  ngOnInit() {
    this.as.getCurrentUser().subscribe(auth=>{
      
      let uid = this.ar.snapshot.params['uid'];
      let orderId = +(this.ar.snapshot.params['order']);
      this.orderSearch = this.db.list('/orders/' + uid, {
        query: {
        orderByChild: 'orderId',
        equalTo: orderId
        }
      });
      this.orderSearch.take(1).subscribe((order)=>{
        if(order[0] !== undefined || null ){
          
          let key = order[0].$key
          let a:any  = order[0];

          a.isPaid = true;
          a.isCreated = this.date;
          a.isTBD = this.date1
          a.time = this.urgencyA[a.service].array[a.urgency]["time"];
          a.isTBD.setUTCHours(a.isTBD.getUTCHours() + a.time);

          this.orderDb = this.db.list('/orders/'+ auth);
          this.orderDb.update( key, a );
          this.message = "successful"
          this.dash = true;
            // this.router.navigateByUrl('/dashboard/orders');

        }
      });
    });
  }

  gotoDash(){
    this.router.navigateByUrl('/dashboard/orders');
  }
  ngOnDestroy(){

  }
  
}
