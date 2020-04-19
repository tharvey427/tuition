import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EndpointsService } from './constants/endpoints.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularWebStorageModule } from 'angular-web-storage';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewClaimsComponent } from './components/view-claims/view-claims.component';
import { AddClaimComponent } from './components/add-claim/add-claim.component';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ExcelService } from './services/excel.service';
import { CommonModule, DatePipe } from '@angular/common';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    HomeComponent,
    ViewClaimsComponent,
    AddClaimComponent,
    DashboardComponent,
    EmployeeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AngularWebStorageModule,
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
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
    EndpointsService,
    CookieService,
    ExcelService,
    DatePipe // needed datepipe as provider, doesn't have to be installed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
