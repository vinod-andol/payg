import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  profile = 'Hello, Brijesh';
  menuActive: boolean = false;

  constructor(private sharedService:SharedService){

  }

  toggleNavbar() {
    this.menuActive = !this.menuActive;
  }

  toggleSidenav() {
    this.sharedService.sendClickEvent();
  }
}
