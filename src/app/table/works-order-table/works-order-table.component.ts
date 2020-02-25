import { Component, OnInit } from '@angular/core';
import { model } from './model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import  { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-works-order-table',
  templateUrl: './works-order-table.component.html',
  styleUrls: ['./works-order-table.component.css']
})
export class WorksOrderTableComponent implements OnInit {

  data: model[] = [];
  displayedColumns: string[] = ['WorksOrderNo', 'BatchNo', 'SerialNo'];
  isLoadingResults = true;
  dataSource: MatTableDataSource<model>;

  constructor() { }

  ngOnInit() {
  }

}


WorksOrderNo: string;
  BatchNo: string;
  SerialNo: stri
