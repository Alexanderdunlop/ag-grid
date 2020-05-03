import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-customized-cell',
  templateUrl: './customized-cell.component.html',
  styleUrls: ['./customized-cell.component.scss'],
})
export class CustomizedCellComponent
  implements OnInit, ICellRendererAngularComp {
  cellvalue: any;

  constructor() {}

  ngOnInit(): void {}

  agInit(params: any) {
    if (params.value > 20) {
      this.cellvalue = `Above 20 - ${params.value}`;
    } else {
      this.cellvalue = `Below 20 - ${params.value}`;
    }
  }

  refresh(params: any): boolean {
    if (params.value > 20) {
      this.cellvalue = `Above 20 - ${params.value}`;
    } else {
      this.cellvalue = `Below 20 - ${params.value}`;
    }
    return true;
  }
}
