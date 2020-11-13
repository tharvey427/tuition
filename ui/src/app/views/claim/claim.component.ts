import { MatTableDataSource } from '@angular/material/table';
// import { ToastrService } from 'ngx-toastr';
import { ClaimService } from './../../services/claim.service';
import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-ToastrService';
import { Claim } from 'src/app/classes/claim';

@Component({
  selector: 'app-claims',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {
  public claim: Claim;
  public claims: Claim[];
  public dataSource = new MatTableDataSource<Claim>();

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.claimService.getAllClaims().subscribe((data: Claim[]) => {
      this.claims = data;
      this.dataSource.data = data;
      console.log(this.dataSource.data);
      console.log(this.claims);
    });
    // console.log(this.dataSource.data); empty array
    // console.log(this.claims); undefined

    // this.claimService.getClaim(this.claim.claimId).subscribe((data: Claim) => {
    //   this.claim = data;
    // });
  }

}
