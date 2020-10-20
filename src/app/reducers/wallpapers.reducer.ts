import { IWallpaper } from '../models/wallpaper.model';
import * as WallpaperActions from '../actions/wallpapers.actions';
import { IAppState } from '../app.state';
import { createReducer, on } from '@ngrx/store';

const initialState: IAppState = {
  recent: [], // TODO Refactor store as an object key: id
  favorites: [],
  recentLoading: false,
  recentLoaded: false,
};

export const reducer = createReducer(
  initialState,
  on(WallpaperActions.loadRecentSuccess, (state, { recent }) => ({
      ...state,
      recent,
      recentLoaded: true,
      recentLoading: false,
    })
  ),
  on(WallpaperActions.recentLoading, (state) => ({
      ...state,
      recentLoading: true,
    })
  ),
  on(WallpaperActions.addWallpaperToFavorites, (state, { paper }) => ({
      ...state,
      favorites: [paper, ...state.favorites] // TODO remove duplicates after store refactor;
    })
  ),
  on(WallpaperActions.removeWallpaperFromFavorites, (state, { paper }) => ({
      ...state,
      favorites:  state.favorites.filter((wallpaper: IWallpaper) => {
        return wallpaper.id !== paper.id;
      })
    })
  )
);
