import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
// import { DatePipe } from '@angular/common';
import { Employee } from '../models/employee';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  constructor() {
  }

  // async generateEmployeeExcel(data: Employee[], workbook: Workbook ) {

  //   workbook.xlsx.writeBuffer().then(( data ) => {
  //     const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  //     fs.saveAs(blob, 'Employees.xlsx');
  //   });

  //   // workbook.csv.writeFile('employees.csv').then(() => {
  //   //   console.log('saved');
  //   // });
  // }

  exportEmployee(fileName: string, wb: XLSX.WorkBook): void {
    // adding data to worksheets
    // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);

    /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    fs.saveAs(data, fileName + this.fileExtension);
  }

}
