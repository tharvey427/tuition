import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { ViewClaimsComponent } from './components/view-claims/view-claims.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: HomeComponent},
  { path: 'claims', component: ViewClaimsComponent }
  // { path: 'login', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
