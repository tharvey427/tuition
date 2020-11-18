import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Claim } from 'src/app/classes/claim';

@Component({
  selector: 'app-employee-claims',
  templateUrl: './employee-claims.component.html',
  styleUrls: ['./employee-claims.component.scss']
})
export class EmployeeClaimsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
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
