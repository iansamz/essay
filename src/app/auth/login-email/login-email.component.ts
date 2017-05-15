import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public as: AuthService,  private router: Router) { 
    this.as.authState();
  }

  ngOnInit() {

  }

  onSubmit(formData) {
    if(formData.valid) {
      this.as.af.auth.signInWithEmailAndPassword(formData.value.email,formData.value.password)
      .then(
        (success) => {
          this.router.navigate(['/home']);
      }).catch(
        (err) => {
          this.error = err;
      });
    }
  }
}
