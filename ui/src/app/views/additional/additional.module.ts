import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalRoutingModule } from './additional-routing.module';
import { GradeComponent } from './grade/grade.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GradeComponent
  ],
  imports: [
    CommonModule,
    AdditionalRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdditionalModule { }
