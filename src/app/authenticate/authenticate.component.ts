import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthenticateComponent implements OnInit {
  userName:string;
  password:string;
  constructor(private authSer:AuthenticateService) { }

  ngOnInit() {
  }
  autheticate()
  {
    this.authSer.authenticate(this.userName,this.password);
    console.log("\nusername is "+this.userName+"\npassword is "+this.password );
  }
}
