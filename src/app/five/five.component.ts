import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss'],
})
export class FiveComponent {
  private gridApi;
  private gridColumnApi;

  public modules: any = [
    ClientSideRowModelModule,
    RowGroupingModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];
  columnDefs;
  defaultColDef;
  autoGroupColumnDef;
  sideBar;
  rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'country',
        rowGroup: true,
        enableRowGroup: true,
      },
      {
        field: 'year',
        rowGroup: true,
        enableRowGroup: true,
        enablePivot: true,
      },
      { field: 'date' },
      { field: 'sport' },
      {
        field: 'gold',
        aggFunc: 'sum',
      },
      {
        field: 'silver',
        aggFunc: 'sum',
      },
      {
        field: 'bronze',
        aggFunc: 'sum',
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      sortable: true,
      resizable: true,
    };
    this.autoGroupColumnDef = { minWidth: 250 };
    this.sideBar = 'columns';
  }

  onBtNormal() {
    this.gridColumnApi.setPivotMode(false);
    this.gridColumnApi.setPivotColumns([]);
    this.gridColumnApi.setRowGroupColumns(['country', 'year']);
  }

  onBtPivotMode() {
    this.gridColumnApi.setPivotMode(true);
    this.gridColumnApi.setPivotColumns([]);
    this.gridColumnApi.setRowGroupColumns(['country', 'year']);
  }

  onBtFullPivot() {
    this.gridColumnApi.setPivotMode(true);
    this.gridColumnApi.setPivotColumns(['year']);
    this.gridColumnApi.setRowGroupColumns(['country']);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }
}
