import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { ToastrService } from 'ngx-toastr';
import { ClaimService } from '../../../services/claim.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Claim } from 'src/app/classes/claim';

@Component({
  selector: 'app-all-claims',
  templateUrl: './all-claims.component.html',
  styleUrls: ['./all-claims.component.scss'],
  // './../grade/grade.component.scss'
})
export class AllClaimsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<Claim>();
  public claims: Claim[];
  public selectedClaim: Claim;

  displayedColumns: string[] = [
    'claimId',
    'employeeFirst',
    'employeeLast',
    'gradeFormat',
    'eventType',
    'justification',
    'cost',
  ];

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.claimService.getAllClaims().subscribe((data: Claim[]) => {
      this.dataSource.data = data;
      this.claims = data;
    });
  }

  ngAfterViewInit(): void {
    // below needs to be edited for nested sort
    // this.dataSource.sortingDataAccessor = (item, property) => {
    //   switch (property) {
    //     case 'employeeFirst':
    //       return item.employeeFirst;
    //     default:
    //       return item[property];
    //   }
    // };
    this.dataSource.sort = this.sort;
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
        default:
          return 0;
      }
    });
  }

  onSelect(claim: Claim): void {
    this.selectedClaim = claim;
    console.log(this.selectedClaim);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
