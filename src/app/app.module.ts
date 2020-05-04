import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
// NOTE: this is only for dev and a license is required
import 'ag-grid-enterprise';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
// ROUTER
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },
  { path: 'five', component: FiveComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    HomeComponent,
    TwoComponent,
    ThreeComponent,
    CustomizedCellComponent,
    FourComponent,
    FiveComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AgGridModule.withComponents([CustomizedCellComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
