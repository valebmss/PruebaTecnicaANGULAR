import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
selector: 'app-login',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: boolean = false;
  hidePassword: boolean = true; // Variable para controlar la visibilidad de la contraseña


  constructor(private authService: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
  }
  
  login(): void {
    if (this.authService.login(this.username, this.password)) {
      console.log('Login successful');
      this.router.navigate(['/inicio/home']);
      const avatarUrl = this.authService.getAvatarUrl(); 
      this.loginError = false;
    } else {
      console.log('Invalid credentials');
      this.loginError = true;
    }
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
