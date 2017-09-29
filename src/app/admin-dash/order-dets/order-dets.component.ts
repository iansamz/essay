import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Order3 } from '../../classes/order3';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-order-dets',
  templateUrl: './order-dets.component.html',
  styleUrls: ['./order-dets.component.css']
})
export class OrderDetsComponent implements OnInit {

  orderSearch : FirebaseListObservable<any>;
  service : any ;
  paper : any ;
  subject : any ;
  topic : any;
  orderDesc : any;
  format : any ;
  resources : any ;
  academicLevel : any ;
  urgency:any;
  pages:any;
  writer:any;
  writerLevel:any;
  originality:any;
  proofRead:any;
  summary:any;
  urgentWriter:any;
  draft:any;
  custService:any;
  orderPrice:any;
  email:any;
  key : any;
  isCompleted : boolean;

  uid:any;
  orderId:any;
  constructor( public ar : ActivatedRoute, public db : AngularFireDatabase,public as: AdminService,public router:Router) {
    
   }

  ngOnInit() {
      this.uid = this.ar.snapshot.params['uid'];
      this.orderId = +(this.ar.snapshot.params['id']);
      this.orderSearch = this.db.list('/orders/' + this.uid, {
        query: {
        orderByChild: 'orderId',
        equalTo: this.orderId
        }
      });
      this.orderSearch.subscribe(dets=>{
        let o = dets[0];
        this.service = this.as.servicesA[o.service].name;
        this.paper = this.as.papersA[o.service].array[o.paper].name;
        this.subject = this.as.subjectsA[o.subject].name;
        this.topic = o.topic;
        this.orderDesc = o.orderDesc;
        this.format = this.as.formatsA[o.format].name;
        if(o.resNeed == true){
          this.resources = o.resources
        }else{
          this.resources = "Not Needed"
        }
        this.academicLevel = this.as.academicLevelA[o.service].array[o.academicLevel].name;
        this.urgency = this.as.urgencyA[o.service].array[o.urgency].name;
        this.pages = o.pages;
        if(o.writer == 1){
          this.writer = "US Writer";
        }else{
          this.writer = "UK Writer";
        }

        if(o.writerLevel == 1){
          this.writerLevel = "Normal";
        }else if(o.writerLevel == 1.25){
          this.writerLevel = "Premium";
        }else {
          this.writerLevel = "Top 10";
        }

        if(o.originality == true){
          this.originality = "Yes";
        }else{
          this.originality = "No";
        }

        if(o.proofRead == true){
          this.proofRead = "Yes";
        }else{
          this.proofRead = "No";
        }
        if(o.summary == true){
          this.summary = "Yes";
        }else{
          this.summary = "No";
        }

        if(o.urgentWriter == true){
          this.urgentWriter = "Yes";
        }else{
          this.urgentWriter = "No";
        }

        if(o.draft == true){
          this.draft = "Yes";
        }else{
          this.draft = "No";
        }

        if(o.custService == true){
          this.custService = "Yes";
        }else{
          this.custService = "No";
        }
        this.email = o.clientEmail;
        this.orderPrice = o.orderPrice;
        this.key = o.$key
        this.isCompleted = o.isCompleted;
      });
  }

  setComplete(){
      this.orderSearch.subscribe(dets=>{
        let o = dets[0]
        o.isCompleted = true;
        let order = this.db.list('/orders/'+this.uid);
        order.update(this.key, o);
        this.router.navigate(['/admin/complete']);
      });
    
  }

}
