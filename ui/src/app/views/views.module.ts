import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim/claim.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { GradeComponent } from './grade/grade.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    ClaimComponent,
    LoginComponent,
    GradeComponent,
    ClaimDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, // adding this was necessary to use ngfor or mat-table
    // RouterModule
  ]
})
export class ViewsModule { }
