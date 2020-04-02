import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public username: string;
public password: string;
public loggedUser: Employee;
private cookieValue: string;

  constructor(private employeeService: EmployeeService, private cookieService: CookieService, public session: SessionStorageService,
              private router: Router) { }

  ngOnInit(): void {
    // if (!this.loggedUser) {this.employeeService.login(null, null).subscribe(
    //   resp => {
    //     this.loggedUser = resp;
    //   });
    // }
  }

  login() {
    console.log(this.username);
    if (this.username !== null && this.password !== null || this.username !== undefined) {
      this.employeeService.login(this.username, this.password).subscribe(
        resp => {
          this.loggedUser = resp;
          console.log(this.loggedUser.first);
          // this.loggedUser = this.session.get('User');
          this.cookieService.set('username', this.username);
          this.cookieService.set('password', this.password);
          this.cookieService.get(this.username);
          this.cookieService.get(this.password);

          console.log(this.username);
          const cookieExists: boolean = this.cookieService.check('username');
          console.log(cookieExists);
          this.session.set('Employee', this.loggedUser.employeeId);
        }
      );
    }
    this.router.navigate(['dasboard']);
  }

  logout() {
    // this.employeeService.logout();
    this.router.navigate(['home']);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  checkCookie(key: string) {
    return this.cookieService.check(key);
  }

  getAllCookies() {
    return this.cookieService.getAll();
  }

  deleteCookie(key: string) {
    return this.cookieService.delete(key);
  }

  deleteAllCookies() {
    return this.cookieService.deleteAll();
  }

}
