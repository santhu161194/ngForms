import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../hero';
@Injectable()
export class ConnectionService {
   Url = '/search';
  constructor(private http:HttpClient
    
    ) { }
    
     getData(): void {
       this.http.get(this.Url).subscribe(response=>console.log(response));
    }
}
