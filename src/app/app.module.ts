import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PromiseComponent } from './connection/connection.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { ConnectionService } from './connection.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AuthenticateService } from './authenticate.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PromiseComponent,
    EmployeeDetailsComponent,
    AuthenticateComponent
  ],
  providers:[ConnectionService,AuthenticateService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }