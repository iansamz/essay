import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {

  constructor(public as : AuthService, public router: Router){
    this.as.authState();
  }
  ngOnInit(){
    
  }
  ngOnDestroy(){
    
  }
}
