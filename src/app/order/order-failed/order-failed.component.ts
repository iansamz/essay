import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.css']
})
export class OrderFailedComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  gotoDash(){
    this.router.navigateByUrl('/dashboard');
  }
}
