import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IWallpaper, IUser } from '../models/wallpaper.model';
import { IAppState } from '../app.state';
import { GET_RECENT_WALLPAPERS } from '../actions/wallpapers.effects';
import { addWallpaperToFavorites } from '../actions/wallpapers.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public recent: IWallpaper[];
  public loading: boolean;

  constructor(
    private store: Store<{ wallpapers: IAppState }>
  ) {
    store.pipe(select('wallpapers'))
      .subscribe(data => {
        this.recent = data.recent;
        this.loading = data.recentLoading;
      });
  }

  public addToFavorites(paper: IWallpaper): void {
    this.store.dispatch(addWallpaperToFavorites({ paper }));
  }

  ngOnInit(): void {
    if (!this.recent || this.recent && !this.recent.length) {
      this.store.dispatch({ type: GET_RECENT_WALLPAPERS });
    }
  }


}
