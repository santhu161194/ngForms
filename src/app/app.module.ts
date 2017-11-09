import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ConnectionComponent } from './connection/connection.component';
import { HttpClientModule } from "@angular/common/http";
import { ConnectionService } from './connection.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    ConnectionComponent
  ],
  providers:[ConnectionService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }