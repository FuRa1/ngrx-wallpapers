export interface IWallpaper {
  categories?: any[];
  height?: number;
  description?: null | string;
  links?: {
    download?: string;
    download_location?: string
  };
  id?: string;
  likes?: number;
  updated_at?: string;
  created_at?: string;
  urls?: {
    full?: string;
    raw?: string;
    regular?: string;
    small?: string;
    thumb?: string;
  };
  user?: IUser;

}

export interface IUser {
  bio?: string;
  first_name?: string;
  name?: string;
  portfolio_url?: string | null;
  profile_image?: {
    large?: string;
    medium?: string;
    small?: string;
  };
  twitter_username?: string;
  total_likes?: number;
  total_photos?: number;
  username?: string;
}

