import { Component } from '@angular/core';
import { SideMenuComponent } from '../sidemenu/sidemenu.component';
import { RouterOutlet } from '@angular/router';
import HomeComponent from '../../../pages/home/home.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ SideMenuComponent , RouterOutlet, HomeComponent],
  templateUrl: './layout.component.html'
})
export default class LayoutComponent {

}
