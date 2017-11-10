import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConnectionService } from "../connection.service";
import { Employee } from '../../employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private connSer:ConnectionService) { }
  employee:Employee;
  promiseEmployee:Promise<Employee>;
  errorMessage:String;
  empId:string;
  url:string;
  show:boolean;
  showAll:boolean;
  ngOnInit() {
   this.employee=new Employee('','','','','','','','','','','','');
  }

  getEmpl(empId)
  {
    this.url="http://192.168.0.92:7207/assetmanagementwebapp/getEmpl?empId="+this.empId;
    this.promiseEmployee=this.connSer.getEmployeeDetails(this.url);
    this.promiseEmployee.then(
      empl=>this.employee=empl,
      error =>  this.errorMessage = <any>error
    
    );
    this.show=true;
  }

}
