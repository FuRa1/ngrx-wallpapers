import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    GridComponent
  ],
  providers: [],
})
export class SharedComponentsModule {
}
