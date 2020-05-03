import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  columnDefs = [
    {
      headerName: 'UserId',
      field: 'userId',
      rowGroup: true,
    },
    {
      headerName: 'Title',
      field: 'title',
      sortable: true,
      filter: true,
      checkboxSelection: true,
    },
    { headerName: 'Body', field: 'body', sortable: true, filter: true },
  ];

  autoGroupColumnDef = {
    headerName: 'Id',
    field: 'id',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  };

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.id + ' ' + node.title)
      .join(', ');
    alert(`Selected Nodes: ${selectedDataStringPresentation}`);
  }
}
