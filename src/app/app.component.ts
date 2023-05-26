import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'payg';
  clickEventsubscription!:Subscription;
  toggleSidenavactive: boolean = false;

  constructor(private sharedService:SharedService){
    this.clickEventsubscription=    this.sharedService.getClickEvent().subscribe(()=>{
      this.incrementCount();
      })
  }

  incrementCount(){
    this.toggleSidenavactive = !this.toggleSidenavactive;
    }
}
