import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../connection.service';
import { Hero } from '../../hero';
import { Employee } from "../../employee";
@Component({
   selector: 'app-promise',
   templateUrl: './connection.component.html'
})
export class PromiseComponent implements OnInit { 
   promiseBooks: Promise<Employee[]>
   books: Employee[];
   errorMessage: String;
   url = "http://192.168.0.92:8085/assetmanagementwebapp/viewEmployees";
   constructor(private bookService: ConnectionService) { 
   }
   ngOnInit(): void {
	this.promiseBooks = this.bookService.getBooksWithPromise(this.url);
	this.promiseBooks.then(
           books => this.books = books,
           error =>  this.errorMessage = <any>error);
   }
} 