import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewClaimsComponent } from './components/view-claims/view-claims.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
  { path: 'employees/:id', component: EmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: HomeComponent},
  { path: 'claims', component: ViewClaimsComponent },
  { path: 'dashboard', component: DashboardComponent}
  // { path: 'login', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
