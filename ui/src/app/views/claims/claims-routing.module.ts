import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllClaimsComponent } from './all-claims/all-claims.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';

const routes: Routes = [
  { path: '', component: AllClaimsComponent }, // navigates to /claims
  { path: ':id', component: ClaimDetailComponent } // navs to /claims/id ex claims/1
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // this was necessary for the data in components to load
  ]
})
export class ClaimsRoutingModule { }
