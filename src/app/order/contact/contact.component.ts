import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-order-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(public af : AngularFireAuth) { }

  ngOnInit() {
  }
}
