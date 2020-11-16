import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim/claim.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { GradeComponent } from './grade/grade.component';

@NgModule({
  declarations: [
    ClaimComponent,
    LoginComponent,
    GradeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, // adding this was necessary to use ngfor or mat-table
    // RouterModule
  ]
})
export class ViewsModule { }
