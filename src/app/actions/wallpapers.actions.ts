import { Action } from '@ngrx/store';
import { IWallpaper } from '../models/wallpaper.model';

export const RECENT_LOADING = '[WALLPAPERS] Recent Loading';
export const RECENT_LOADED = '[WALLPAPERS] Recent Loaded';
export const ADD_RECENT_WALLPAPERS = '[WALLPAPERS] Add Recent';
export const ADD_WALLPAPER_TO_FAVORITES = '[WALLPAPERS] Add';
export const REMOVE_WALLPAPER_FROM_FAVORITES = '[WALLPAPERS] Remove';

export class AddRecentWallpapers implements Action {
  readonly type = ADD_RECENT_WALLPAPERS;

  constructor(public payload: IWallpaper[]) {
  }
}

export class AddWallpaperToFavorites implements Action {
  readonly type = ADD_WALLPAPER_TO_FAVORITES;

  constructor(public payload: IWallpaper) {
  }
}

export class RemoveWallpaperFromFavorites implements Action {
  readonly type = REMOVE_WALLPAPER_FROM_FAVORITES;

  constructor(public payload: IWallpaper) {
  }
}

export class RecentLoading implements Action {
  readonly type = RECENT_LOADING;
}

export class RecentLoaded implements Action {
  readonly type = RECENT_LOADED;
}

export type Actions =
  AddWallpaperToFavorites |
  RemoveWallpaperFromFavorites |
  AddRecentWallpapers |
  RecentLoading |
  RecentLoaded;
