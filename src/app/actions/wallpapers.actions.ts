import { Action, createAction, props } from '@ngrx/store';
import { IWallpaper } from '../models/wallpaper.model';

export const RECENT_LOADING = '[WALLPAPERS] Recent Loading';
export const RECENT_LOADED = '[WALLPAPERS] Recent Loaded';
export const ADD_RECENT_WALLPAPERS = '[WALLPAPERS] Add Recent';
export const ADD_WALLPAPER_TO_FAVORITES = '[WALLPAPERS] Add';
export const REMOVE_WALLPAPER_FROM_FAVORITES = '[WALLPAPERS] Remove';


export const loadRecentSuccess = createAction(
  ADD_RECENT_WALLPAPERS,
  props<{ recent: IWallpaper[] }>()
);

export const addWallpaperToFavorites = createAction(
  ADD_WALLPAPER_TO_FAVORITES,
  props<{ paper: IWallpaper }>()
);


export const removeWallpaperFromFavorites = createAction(
  REMOVE_WALLPAPER_FROM_FAVORITES,
  props<{ paper: IWallpaper }>()
);

export const recentLoading = createAction(
  RECENT_LOADING,
);


export const recentLoaded = createAction(
  RECENT_LOADED,
);
