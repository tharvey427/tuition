import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  loggedUser: Employee;
  employee: Employee;

  constructor(private employeeService: EmployeeService, private session: SessionStorageService) { }

  ngOnInit() {
    this.loggedUser = JSON.parse(this.session.get('Employee'));
    console.log(this.session.get('Employee'));
    console.log(this.loggedUser);

    this.employeeService.getEmployee(this.loggedUser.employeeId).subscribe((data: Employee) => {
      this.employee = data;
    });
  }

}
