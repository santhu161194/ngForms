import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../hero';
import { Employee } from "../employee";

@Injectable()
export class ConnectionService {
    
    constructor(private http:Http) { }
    getBooksWithObservable(url): Observable<Employee[]> {
        return this.http.get(url).map(this.extractData).catch(this.handleErrorObservable);
    }
    getBooksWithPromise(url): Promise<Employee[]> {
        return this.http.get(url).toPromise()
	    .then(this.extractData)
	    .catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }

    getEmployeeDetails(url):Promise<Employee>{
        return this.http.get(url).toPromise().then(this.extractData).catch(this.handleErrorObservable)
    }
    
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	
} 