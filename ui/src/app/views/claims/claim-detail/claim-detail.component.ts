import { Component, Input, OnInit } from '@angular/core';
import { Claim } from 'src/app/classes/claim';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.scss', '../all-claims/all-claims.component.scss']
})
export class ClaimDetailComponent implements OnInit {
  @Input() claim: Claim;
  // the input received from all-claims component of selected/clicked claim

  constructor() { }

  ngOnInit(): void {
  }



}
