import { IWallpaper } from './models/wallpaper.model';

export interface IAppState {
  readonly recent: IWallpaper[];
  readonly favorites: IWallpaper[];
  readonly recentLoading: boolean;
}
