import { ClaimService } from './../../services/claim.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Claim } from 'src/app/classes/claim';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.scss']
})
export class ClaimDetailComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<Claim>();
  public claims: Claim[];

  displayedColumns: string[] = [
    'claimId',
    'employeeFirst',
    'employeeLast',
    'gradeFormat',
    'eventType',
    'start',
    'submit',
    'location',
    'description',
    'justification',
    'cost',
  ];

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.claimService.getAllClaimsByEmployee(1);
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data;
    if (!sort.active || sort.direction === '') {
      this.claims = data;
      return;
    }
    this.claims = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'claimId':
          return compare(a.claimId, b.claimId, isAsc);
        case 'cost':
          return compare(a.cost, b.cost, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
