import { GradeComponent } from './views/grade/grade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/Main/home/home.component';;
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AllClaimsComponent } from './views/claims/all-claims/all-claims.component';
import { ClaimDetailComponent } from './views/claims/claim-detail/claim-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  { path: 'login', component: LoginComponent },
  { path: 'claims', component: AllClaimsComponent, children: [
    { path: ':id', component: ClaimDetailComponent }
  ]},
  { path: 'grades', component: GradeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
