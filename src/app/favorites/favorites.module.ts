import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedComponentsModule
  ]
})
export class FavoritesModule { }
