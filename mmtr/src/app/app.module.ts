import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EndpointsService } from './constants/endpoints.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { AngularWebStorageModule } from 'angular-sessionstorage';
import { AngularWebStorageModule } from 'angular-web-storage';
// import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewClaimsComponent } from './components/view-claims/view-claims.component';
import { AddClaimComponent } from './components/add-claim/add-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    HomeComponent,
    ViewClaimsComponent,
    AddClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AngularWebStorageModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports:
    [BsDropdownModule,
      TooltipModule,
      ModalModule
    ],
  providers: [
    EndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
