import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
