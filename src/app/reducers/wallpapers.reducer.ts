import { IWallpaper } from '../models/wallpaper.model';
import * as WallpaperActions from '../actions/wallpapers.actions';
import { IAppState } from '../app.state';

const initialState: IAppState = {
  recent: [],
  favorites: [],
};

export function reducer(state: IAppState = initialState, action: WallpaperActions.Actions): IAppState {
  switch (action.type) {
    case WallpaperActions.ADD_RECENT_WALLPAPERS:
      return { ...state, recent: [...action.payload] };
    case WallpaperActions.ADD_WALLPAPER_TO_FAVORITES:
      const newFavorites = [action.payload, ...state.favorites];
      return { ...state, favorites: newFavorites };
    case WallpaperActions.REMOVE_WALLPAPER_FROM_FAVORITES:
      const filteredFavorites = state.favorites.filter((wallpaper: IWallpaper) => {
        return wallpaper.id !== action.payload.id;
      });
      return { ...state, favorites: filteredFavorites };
    default:
      return state;
  }
}
