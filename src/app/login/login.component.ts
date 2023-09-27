import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get<any>('email')?.value;
      const password = this.loginForm.get<any>('password')?.value;

      this.authService.login(username, password).subscribe(
        (response) => {
          console.log("Inicio de sesión exitoso", response)
          this.router.navigate(['/dashBoard']);
        },
        (error) => {
          alert("Corrija sus datos");
          
        }
      )
    }
  }

}
