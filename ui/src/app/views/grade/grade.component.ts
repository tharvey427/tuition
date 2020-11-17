import { GradeService } from './../../services/grade.service';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Grade } from 'src/app/classes/grade';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  public grades: Grade[];
  public dataSource = new MatTableDataSource<Grade>();
  displayedColumns: string[] = ['gradeFormatId', 'gradeFormat'];

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.getAllGrades().subscribe((data: Grade[]) => {
      this.dataSource.data = data;
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  // Sorting data change event when clicking a column header to sort
  sortData(sort: Sort) {
    const data = this.dataSource.data;
    if(!sort.active || sort.direction === '') {
      this.grades = data;
      return;
    }

    this.grades = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'gradeFormatId': return compare(a.gradeFormatId, b.gradeFormatId, isAsc);
        case 'gradeFormat': return compare(a.gradeFormat, b.gradeFormat, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
