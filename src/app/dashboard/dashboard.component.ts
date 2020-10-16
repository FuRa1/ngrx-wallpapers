import {  Component, OnInit } from '@angular/core';
import { UnsplashApiService } from '../unsplash-api.service';
import { toJson } from 'unsplash-js';
import { select, Store } from '@ngrx/store';
import { IWallpaper, IUser } from '../models/wallpaper.model';
import * as WallpaperActions from './../actions/wallpapers.actions';
import { IAppState } from '../app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public recent: IWallpaper[];

  constructor(
    private unsplashAPi: UnsplashApiService,
    private store: Store<{ wallpapers: IAppState }>
  ) {
    store
      .pipe(
        select('wallpapers')
      )
      .subscribe(
        data => (this.recent = data.recent)
      );
  }

  public addToFavorites(paper: IWallpaper): void {
    this.store.dispatch(new WallpaperActions.AddWallpaperToFavorites(paper));
  }

  ngOnInit(): void {
    this.unsplashAPi.getLast15()
      .then(toJson)
      .then((json: IWallpaper[]) => {
        this.store.dispatch(new WallpaperActions.AddRecentWallpapers(json));
      });
  }


}
