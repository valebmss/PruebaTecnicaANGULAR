import { Component} from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './sidemenu.component.html'})

  export class SideMenuComponent {
  
    constructor(private authService: AuthService) {}
  
    logout(): void {
      this.authService.logout();
    }
    getAvatarUrl(): string {
      return this.authService.getAvatarUrl();
    }
    getUsername(): string {
      return this.authService.getCurrentUsername();
    }
  }