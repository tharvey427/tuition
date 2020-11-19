import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClaimService } from '../../../services/claim.service';
import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/classes/claim';
import { ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-claims',
  templateUrl: './all-claims.component.html',
  styleUrls: ['./all-claims.component.scss'],
  // './../grade/grade.component.scss'
})
export class AllClaimsComponent implements OnInit {
  public claims: Claim[];

  public selectedClaim: Claim;
  public selectedId: number;

  claims$: Observable<Claim[]>;

  constructor(private claimService: ClaimService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.claimService.getAllClaims().subscribe((data: Claim[]) => {
    //   this.claims = data;
    // });

    this.claims$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.claimService.getAllClaims()
      })
    );

  }

  onSelect(claim: Claim, id: number): void {
    this.selectedClaim = claim;
    // this.selectedClaim.claimId = id; // this line caused above not to work
    // this.router.navigate(['claims', id]);
    console.log(this.selectedClaim);
  }
}
