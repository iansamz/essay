import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup-email',
  templateUrl: './signup-email.component.html',
  styleUrls: ['./signup-email.component.css']
})
export class SignupEmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public as: AuthService,  private router: Router) { 
    this.as.authState();
  }

  ngOnInit() {

  }

  onSubmit(formData) {
    if(formData.valid) {
      this.as.af.auth.createUserWithEmailAndPassword(formData.value.email,formData.value.password)
      .then(
        (success) => {
          this.as.createUser();
          this.router.navigate(['/home']);
      }).catch(
        (err) => {
          this.error = err;
      });
    }
  }
}
