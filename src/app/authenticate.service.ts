import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthenticateService {
  url:string;
  constructor(private http:Http) { }
  authenticate(username:string,password:string)
  {
    this.url="http://192.168.0.92:8085/assetmanagementwebapp/authenticate?username="+username+"?password="+password;
    return this.http.get(this.url).toPromise().then().catch(this.catchError);
  }
  catchError(error:Response|any){
    console.log("Login Failed");
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
