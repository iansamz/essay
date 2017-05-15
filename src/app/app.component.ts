import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userPDefault : string = "../assets/images/man.png";
  constructor(public as : AuthService, public af : AngularFireAuth, public router : Router){
    
  }
  ngOnInit(){
  }

  login(){
    this.router.navigateByUrl('/auth/login');
  }

  logout(){
    this.as.logout();
  }
}
