import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IWallpaper } from '../models/wallpaper.model';

export const GET_RECENT_WALLPAPERS = '[WALLPAPERS] Recent';
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

export type Actions = AddWallpaperToFavorites | RemoveWallpaperFromFavorites | AddRecentWallpapers;
