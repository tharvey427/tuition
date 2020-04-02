import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-claims',
  templateUrl: './view-claims.component.html',
  styleUrls: ['./view-claims.component.scss']
})
export class ViewClaimsComponent implements OnInit {

  public claim: Claim;
  public claims: Claim[];

  constructor(private cs: ClaimService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cs.getAllClaims().subscribe((data: Claim[]) => {
      this.claims = data;
    });

    this.cs.getClaim(this.claim.claimId).subscribe((data: Claim) => {
      this.claim = data;
    });
  }

}
