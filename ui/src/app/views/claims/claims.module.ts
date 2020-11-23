import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { EmployeeClaimsComponent } from './employee-claims/employee-claims.component';
import { AllClaimsComponent } from './all-claims/all-claims.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import { ClaimsRoutingModule } from './claims-routing.module';

@NgModule({
  declarations: [
    AllClaimsComponent,
    ClaimDetailComponent,
    EmployeeClaimsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule, // adding this was necessary to use ngfor or mat-table
    ClaimsRoutingModule
  ]
})
export class ClaimsModule { }
