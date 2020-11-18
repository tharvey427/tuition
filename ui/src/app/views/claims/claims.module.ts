import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { GradeComponent } from '../grade/grade.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EmployeeClaimsComponent } from './employee-claims/employee-claims.component';
import { AllClaimsComponent } from './all-claims/all-claims.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';

@NgModule({
  declarations: [
    AllClaimsComponent,
    LoginComponent,
    GradeComponent,
    ClaimDetailComponent,
    PageNotFoundComponent,
    EmployeeClaimsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, // adding this was necessary to use ngfor or mat-table
    // RouterModule
  ]
})
export class ViewsModule { }
