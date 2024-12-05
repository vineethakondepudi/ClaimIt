import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  itemFamilyRequiredError: boolean = false;
  itemFamilyRequiredErrorMessage: string = '';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      if (email === 'pgupta@miraclesoft.com' && password === 'Gupta@123') {
        alert('Logged in as Admin');
        localStorage.setItem('role', 'admin');
        this.router.navigate(['/home']);
      } else if (
        (email === 'vkondepudi@miraclesoft.com' && password === 'Vinnu@123') ||
        (email === 'vpidugu@miraclesoft.com' && password === 'Vani@123')
      ) {
        alert('Logged in as User');
        localStorage.setItem('role', 'user');
        this.router.navigate(['/home']);
      } else {
        this.itemFamilyRequiredError = true;
        this.itemFamilyRequiredErrorMessage = 'Invalid email or password. Please try again.';
      }
    }
  }
  
}
