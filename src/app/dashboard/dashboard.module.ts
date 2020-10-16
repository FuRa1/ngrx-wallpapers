import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [DashboardComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ]
})
export class DashboardModule { }
