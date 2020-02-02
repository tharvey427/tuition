import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public username: string;
public password: string;
public loggedUser: Employee;

  constructor(private employeeService: EmployeeService, public session: SessionStorageService,
              private router: Router) { }

  ngOnInit() {
    // this.employeeService.login()
  }

  login() {
    if (this.username !== null && this.password !== null || this.username !== undefined) {
      this.employeeService.login(this.username, this.password).subscribe(
        resp => {
          this.loggedUser = resp;
          console.log(this.loggedUser.first);
        }
      );
      this.loggedUser = this.session.get('Employee');
    }
  }

}
