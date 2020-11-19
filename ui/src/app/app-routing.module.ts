import { GradeComponent } from './views/grade/grade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/Main/home/home.component';;
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AllClaimsComponent } from './views/claims/all-claims/all-claims.component';
import { ClaimDetailComponent } from './views/claims/claim-detail/claim-detail.component';
import { LoginComponent } from './views/Main/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'claims'}

  // { path: 'claims', component: AllClaimsComponent },
  // { path: 'claim/:id', component: ClaimDetailComponent },

  // wanted to try child module below but was having issues
  // { path: 'claims', component: AllClaimsComponent, children: [
  //   { path: ':id', component: ClaimDetailComponent }
  // ]},
  { path: 'grades', component: GradeComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
