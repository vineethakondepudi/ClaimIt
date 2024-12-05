import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataPropertyPipePipe } from '../data-property-pipe.pipe';

@Component({
  selector: 'app-datatable',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    DataPropertyPipePipe,
    CommonModule,
    HttpClientModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatCheckboxModule,
    OverlayModule], standalone: true,
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss',
  providers: [DatePipe],

})
export class DatatableComponent {
  displayedColumns: Array<string> = [];
  @Input() tableColumns: Array<any> = [];
  filteredColumns: Array<any> = [];
  @Input() set tableData(data: []) {
    this.setTableDataSource(data);
  }
  dataSource: any; // Variable to hold JSON data
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
  @Input() isPageable = false;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = 10;
  @Output() unClaim = new EventEmitter()
  constructor(public readonly router: Router, private datePipe: DatePipe) { }
  ngOnInit() {
    this.displayedColumns = this.tableColumns.map((col) => col.name);
    console.log(this.tableColumns, this.displayedColumns);

    this.filteredColumns = this.tableColumns.filter((col: any) => {
      return col.isChecked === true;
    });
    const columnNames = this.filteredColumns.map(
      (tableColumn: any) => tableColumn.name
    );
    this.displayedColumns = columnNames;
  }

  setTableDataSource(data: []) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }
  setPagination(tableData: [] | undefined) {
    this.dataSource = new MatTableDataSource<any>(tableData);
    this.dataSource.paginator = this.paginator;
  }

  handlePage(params: PageEvent) {
    console.log(params);
  }
  getButtonColor(status: string): string {
    switch (status) {
      case 'open':
        return 'primary';
      case 'unclaim':
        return 'warn';
      case 'pending request':
      case 'pending pickup':
        return 'accent';
      case 'claimed':
        return 'primary';
      default:
        return '';
    }
  }
  unClaimItem(data: any) {
    this.unClaim.emit(data)
  }
}
