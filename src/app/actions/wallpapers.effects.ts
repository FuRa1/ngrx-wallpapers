import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { concat, EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, delay, tap, concatMap } from 'rxjs/operators';
import { UnsplashApiService } from '../api/unsplash-api.service';
import * as WallpaperActions from './wallpapers.actions';

export const GET_RECENT_WALLPAPERS = '[WALLPAPERS] Recent';


@Injectable()
export class WallpapersEffects {
  constructor(
    private actions$: Actions,
    private unsplashApi: UnsplashApiService
  ) {
  }

  @Effect()
  loadRecent$ = this.actions$.pipe(
    ofType(GET_RECENT_WALLPAPERS),
    concatMap(() => concat(
      of(new WallpaperActions.RecentLoading()),
      this.unsplashApi.getLast15()
        .pipe(
          delay(1500),
          switchMap(last15 => [
            new WallpaperActions.AddRecentWallpapers(last15),
            new WallpaperActions.RecentLoaded(),
          ]),
          catchError(() => EMPTY)   // TODO Error Handling
        )))
  );

}
