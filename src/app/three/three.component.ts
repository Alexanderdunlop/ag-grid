import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomizedCellComponent } from '../customized-cell/customized-cell.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  colDefs;
  frameworkComponents;
  private gridApi;
  private gridColumnApi;
  private searchValue;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.colDefs = [
      {
        headerName: 'Name',
        field: 'athlete',
        width: 150,
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 150,
        cellRenderer: 'customizedAgeCell',
      },
      {
        headerName: 'Country',
        field: 'country',
        width: 120,
        lockPosition: true,
        suppressNavigable: true,
        // rowDrag: true,
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 90,
      },
      {
        headerName: 'Date',
        field: 'date',
        width: 110,
      },
      {
        headerName: 'Sport',
        field: 'sport',
        width: 110,
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100,
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100,
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100,
      },
      {
        headerName: 'Total',
        field: 'total',
        width: 100,
      },
    ];
    this.frameworkComponents = {
      customizedAgeCell: CustomizedCellComponent,
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json'
      )
      .subscribe((data) => {
        params.api.setRowData(data);
      });
  }
}
