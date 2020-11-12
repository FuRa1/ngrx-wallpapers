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
import { EffectsModule } from '@ngrx/effects';
import { WallpapersEffects } from './actions/wallpapers.effects';
import { UnsplashApiService } from './api/unsplash-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([WallpapersEffects]),
    StoreModule.forRoot({
      wallpapers: reducer
    })
  ],
  exports: [
  ],
  providers: [
    UnsplashApiService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
