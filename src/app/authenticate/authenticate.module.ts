import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './authenticate.component';
import { AuthenticateService } from '../authenticate.service';

@NgModule({
  imports: [
    CommonModule,
    AuthenticateComponent,
  ],
  declarations: [AuthenticateComponent],
  providers:[AuthenticateService]
})
export class AuthenticateModule { }
