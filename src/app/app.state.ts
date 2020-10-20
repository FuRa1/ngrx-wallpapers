import { IWallpaper } from './models/wallpaper.model';

export interface IAppState {
  readonly recent: IWallpaper[]; // TODO refactor to { [id: number]: IWallpaper }
  readonly favorites: IWallpaper[];
  readonly recentLoading: boolean;
  readonly recentLoaded: boolean;
}
