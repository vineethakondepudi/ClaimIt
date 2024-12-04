import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
standalone: true,
imports: [
ReactiveFormsModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
CommonModule,
HttpClientModule
],
providers:[SharedService],
templateUrl: './login.component.html',
styleUrl: './login.component.scss'
})

export class LoginComponent {
itemFamilyRequiredError: boolean = false;
itemFamilyRequiredErrorMessage: string = '';
loginForm: FormGroup;
constructor(private fb: FormBuilder,private sharedService: SharedService,private router: Router) {
this.loginForm = this.fb.group({
email: ['', [Validators.required, Validators.email]],
});
}
get email() {
return this.loginForm.get('email');
}

onSubmit() {
if (this.loginForm.valid) {
const { email } = this.loginForm.value;
this.sharedService.login(email).subscribe(
(response) => {
// Handle successful login
console.log('Login successful:', response);
if(response.message ==='Email is not valid , please check once'){
console.log('hidata')
this.itemFamilyRequiredError = true
}else {
this.itemFamilyRequiredError = false
}
if(response.message === 'Login Successfully'){
this.router.navigate(['/home']);
}
},
(error) => {
// Handle login error
console.error('Login failed:', error);

export class LoginComponent {
  itemFamilyRequiredError: boolean = false;
  itemFamilyRequiredErrorMessage: string = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private sharedService: SharedService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get email() {
    return this.loginForm.get('email');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email } = this.loginForm.value;
      this.sharedService.login(email).subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful:', response);
          if(response.message ==='Email is not valid , please check once'){
            console.log('hidata')
          this.itemFamilyRequiredError = true
          }else {
            this.itemFamilyRequiredError = false
          }
          if(response.message === 'Login Successfully'){
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
          
        }
      );
    }
  }
}
);
}
}
}