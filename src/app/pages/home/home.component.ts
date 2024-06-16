import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html'
})

export default class HomeComponent {
  constructor(public authService: AuthService) {}

}
