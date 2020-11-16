import { GradeService } from './../../services/grade.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Grade } from 'src/app/classes/grade';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  public dataSource = new MatTableDataSource<Grade>();
  displayedColumns: string[] = ['id', 'gradeFormat'];

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.getAllGrades().subscribe((data: Grade[]) => {
      this.dataSource.data = data;
    })
  }

}
