import { Injectable } from '@angular/core';
import Unsplash, { toJson } from 'unsplash-js';
import { APP_ACCESS_KEY } from '../unsplash-api.const';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable()
export class UnsplashApiService {
  public unsplash: Unsplash;
  constructor() {
    this.unsplash = new Unsplash({
      accessKey: APP_ACCESS_KEY,
    });
  }

  public getLast15(): Observable<any> {
    return from(this.unsplash.photos.listPhotos(2, 15, 'latest').then(toJson));
  }

  public searchWallpapers(input: { [key: string]: string, searchString: string }): Observable<any> {
    console.log(input);
    return from(this.unsplash.search.photos(input.searchString, 1, 15, { orientation: 'portrait' }).then(toJson));
  }
}
