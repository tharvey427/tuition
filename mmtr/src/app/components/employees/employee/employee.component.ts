import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[];
  // creats an array of employee model/object called employees

  constructor(private es: EmployeeService, private toastr: ToastrService) { }
  // in the constructor, employee service and toastr for messages is set up

  ngOnInit() {
    // when the page initializes, the method to get all employees is run
    // subscribe ****will add more info when I look up
    this.es.getAllEmployees().subscribe((data: Employee[]) => {
      // data is set equal to the employee array
      this.employees = data;
      //
    });
  }

}
