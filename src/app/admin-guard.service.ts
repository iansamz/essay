import { Injectable } from '@angular/core';
import { Router, CanLoad , CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot,} from '@angular/router';
import { AuthService } from './auth/auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { FirebaseListObservable } from 'angularfire2/database';
import * as Rx from "rxjs/Rx";
@Injectable()
export class AdminGuardService implements CanActivate, CanActivateChild, CanLoad {

  user:any;
  users : FirebaseListObservable<any> = this.as.db.list('/users');
  t : Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject<boolean>(false);
  
  constructor(public as : AuthService,public router : Router ){
  
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){ 
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(route, state); 
  }

  canLoad(){
    return this.checkLogin();
  }

  checkLogin() : Rx.BehaviorSubject<boolean>| Rx.Observable<boolean> | Promise<boolean> | boolean{
    
    this.getDets();
    

    return this.t
              .takeLast(1)
              .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['auth/login']);
                }
              });

  }
  getDets(){
      this.as.users.subscribe((data:object) =>{
          this.user = data[0];
          this.t.next(this.user.isAdmin);
          this.t.complete();
        });
      }
}
