import { Injectable } from '@angular/core';
import Unsplash, { toJson } from 'unsplash-js';
import { APP_ACCESS_KEY } from '../unsplash-api.const';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UnsplashApiService {
  public unsplash: Unsplash;

  constructor(
    private readonly http: HttpClient
  ) {
    this.unsplash = new Unsplash({
      accessKey: APP_ACCESS_KEY,
    });
  }

  public getLast15(): Observable<any> {
    return from(this.unsplash.photos.listPhotos(2, 15, 'latest').then(toJson));
  }

  public searchWallpapers(input: { [key: string]: string, searchString: string }): Observable<any> {
    return from(this.unsplash.search.photos(input.searchString, 1, 15, { orientation: 'portrait' }).then(toJson));
  }

  public download(url, name): void{
    this.http.get(url, {
      headers: new HttpHeaders({ Accept: '*/*' }),
      responseType: 'blob',
    })
      .subscribe( blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = name;
        link.target = 'blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

}
