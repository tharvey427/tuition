import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim/claim.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ClaimComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ViewsModule { }
