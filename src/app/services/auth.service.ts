import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUser: any = null;

  constructor(private router: Router) {
    // Intentar cargar el estado de autenticación desde localStorage al inicializar el servicio
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
      this.isAuthenticated = true;
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      this.currentUser = {
        username: username,
        avatarUrl: 'https://i.pinimg.com/564x/89/b2/8b/89b28b80121a8824b6dd31fb921661c7.jpg'
      };
      // Guardar el usuario en localStorage para persistencia
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    // Limpiar el usuario en localStorage al hacer logout
    localStorage.removeItem('currentUser');
    this.router.navigate(['']); 
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getAvatarUrl(): string {
    if (this.isAuthenticated && this.currentUser && this.currentUser.avatarUrl) {
      return this.currentUser.avatarUrl;
    } else {
      return 'https://i.pinimg.com/564x/89/b2/8b/89b28b80121a8824b6dd31fb921661c7.jpg';
    }
  }

  getCurrentUsername(): string {
    if (this.isAuthenticated && this.currentUser && this.currentUser.username) {
      return this.currentUser.username;
    } else {
      return 'Usuario Invitado';
    }
  }
}
