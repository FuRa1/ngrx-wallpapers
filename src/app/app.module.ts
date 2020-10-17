import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FavoritesModule } from './favorites/favorites.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/wallpapers.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DashboardModule,
    SharedComponentsModule,
    FavoritesModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      wallpapers: reducer
    })
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
