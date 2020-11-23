import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeComponent } from './grade/grade.component';

const additionalRoutes: Routes = [
  { path: 'grades', component: GradeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(additionalRoutes)
  ],
  exports: [RouterModule]
})
export class AdditionalRoutingModule { }
