import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/services/excel.service';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  @ViewChild('excelTable', { static: false }) excelTable: ElementRef;

  /*name of the excel-file which will be downloaded. */
  fileName = 'ExcelSheet.xlsx';

  progressValue: number;
  rangeArray: number[];

  public employees: Employee[];
  // creats an array of employee model/object called employees

  constructor(private es: EmployeeService, private toastr: ToastrService,
    private excelService: ExcelService, private datePipe: DatePipe) {
    this.progressValue = 0;
    this.rangeArray = new Array(100);
  }
  // in the constructor, employee service and toastr for messages is set up

  @HostListener("window:scroll", [])
  onWindowScroll() {
    var element = document.documentElement,
      body = document.body,
      scrollTop = 'scrollTop',
      scrollHeight = 'scrollHeight';
    this.progressValue =
      (element[scrollTop] || body[scrollTop]) /
      ((element[scrollHeight] || body[scrollHeight]) - element.clientHeight) * 100;
  }

  ngOnInit() {
    // when the page initializes, the method to get all employees is run
    this.loadEmployees();
    // this.generateExcel(); would call on init here to populate table to stay on page for viewing instead of downloading
  }

  loadEmployees(): void {
    // subscribe ****will add more info when I look up
    this.es.getAllEmployees().subscribe((data: Employee[]) => {
      // data is set equal to the employee array
      this.employees = data;
      console.log(data);
    });
  }

  generateExcel(): void {
    //   /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    //   /* table id is passed over here */
    const element = document.getElementById('excelTable');

    //   // adding data to worksheets
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_book(element);
    const ws2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.employees);

    //   // adding worksheets to book
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // XLSX.utils.book_append_sheet(wb, ws2, '2');

    this.excelService.exportEmployee('Employees', wb);
  }

}
