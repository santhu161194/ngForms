import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConnectionComponent implements OnInit {
  
  constructor(private connectionSer:ConnectionService) { }

  ngOnInit() {
    this.connectionSer.getData();  
  }
  onClicksel()
  {
  
  }
}
