import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
})
export class FourComponent implements OnInit {
  colDefs;
  private gridApi;
  private gridColumnApi;
  private searchValue;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.colDefs = [
      {
        field: 'value',
        editable: true,
        cellEditorSelector: function (params) {
          if (params.data.type === 'age') {
            return {
              component: 'numericCellEditor',
            };
          }

          if (params.data.type === 'gender') {
            return {
              component: 'agRichSelectCellEditor',
              params: {
                values: ['Male', 'Female'],
              },
            };
          }

          if (params.data.type === 'mood') {
            return {
              component: 'moodEditor',
            };
          }

          return null;
        },
      },
      { field: 'type' },
    ];
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
