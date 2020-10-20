import { Component, OnInit } from '@angular/core';
import { IWallpaper } from '../models/wallpaper.model';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../app.state';
import * as WallpaperActions from './../actions/wallpapers.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorites: IWallpaper[];


  constructor(
    private store: Store<{ wallpapers: IAppState }>,
  ) {
    store.pipe(select('wallpapers'))
      .subscribe(
        data => (this.favorites = data.favorites)
      );
  }

  ngOnInit(): void {
  }

  public removeFromFavorites(wallpaper: IWallpaper): void {
    this.store.dispatch(WallpaperActions.removeWallpaperFromFavorites({ paper: wallpaper }));
  }

}
