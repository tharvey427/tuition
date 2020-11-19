import { ClaimService } from './../../../services/claim.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claim } from 'src/app/classes/claim';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.scss', '../all-claims/all-claims.component.scss']
})
export class ClaimDetailComponent implements OnInit {
  // @Input() claim: Claim;
  // the input received from all-claims component of selected/clicked claim

  claim$: Observable<Claim>;

  constructor(private route: ActivatedRoute, private router: Router, private claimService: ClaimService) { }

  ngOnInit(): void {
    const claimId = this.route.snapshot.paramMap.get('id');
    console.log(claimId);
    this.claim$ = this.claimService.getClaim(claimId);
    console.log(this.claim$);
  }

  goToClaims(claim: Claim) {
    const claimId = claim ? claim.claimId : null;
    console.log(claimId);
    // pass along claim id if one is available, if not set to null
    this.router.navigate(['/claims', { id: claimId }]);
  }

}
