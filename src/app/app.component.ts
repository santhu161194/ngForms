import { Component } from '@angular/core';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  constructor(connectionService:ConnectionService){}
  showAll:boolean=false;
  toggleDiv()
  {
    this.showAll=!this.showAll;
  }
 }