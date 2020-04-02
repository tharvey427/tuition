import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClaimService } from 'src/app/services/claim.service';
import { SessionStorageService } from 'angular-web-storage';
import { Employee } from 'src/app/models/employee';
import { Claim } from 'src/app/models/claim';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public loggedUser: Employee;
  public claims: Claim[];

  constructor(private toastr: ToastrService, private claimService: ClaimService,
              private session: SessionStorageService) { }

  ngOnInit() {
    this.loggedUser = JSON.parse(this.session.get('Employee'));
    console.log(this.session.get('Employee'));
    console.log(this.loggedUser);

    this.claimService.getClaimsByEmployee(this.loggedUser).subscribe(
      // (resp: Claim[]) => { this.claims = resp;
      (data: Claim[]) => { this.claims = data;
        // decodeURIComponent(data);
    });
  }

}
