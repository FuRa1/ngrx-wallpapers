import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [DashboardComponent, SearchComponent],
  imports: [
    RouterModule,
    SharedComponentsModule,
    CommonModule
  ]
})
export class DashboardModule { }
