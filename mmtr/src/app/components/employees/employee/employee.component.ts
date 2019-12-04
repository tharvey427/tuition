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

  constructor(private es: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.es.getAllEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

}
