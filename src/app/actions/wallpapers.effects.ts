import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, concat, EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, delay, tap, concatMap } from 'rxjs/operators';
import { UnsplashApiService } from '../api/unsplash-api.service';
import * as WallpaperActions from './wallpapers.actions';

export const GET_RECENT_WALLPAPERS = '[WALLPAPERS] Recent';
export const SEARCH_WALLPAPERS = '[SEARCH_WALLPAPERS] Search';


@Injectable()
export class WallpapersEffects {
  loadRecent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_RECENT_WALLPAPERS),
      concatMap(() => concat(
        of(WallpaperActions.recentLoading()), // Dispatch Action Run loader
        this.unsplashApi.getLast15() // Common httpClient api service
          .pipe(
            switchMap(recent => [
              WallpaperActions.loadRecentSuccess({ recent }), // Dispatch Action when loaded
            ]),
            catchError(() => EMPTY)   // TODO Error Handling
          )))
    )
  );

  searchPapers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SEARCH_WALLPAPERS),
      concatMap((input) => concat(
        of(WallpaperActions.recentLoading()),
          this.unsplashApi.searchWallpapers(input)
            .pipe(
              switchMap(results => [
                WallpaperActions.loadRecentSuccess({ recent: results.results }),
              ]),
              catchError(() => EMPTY)   // TODO Error Handling
            )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private unsplashApi: UnsplashApiService
  ) {
  }

  //
  // @Effect()
  // loadRecent$ = this.actions$.pipe(
  //   ofType(GET_RECENT_WALLPAPERS),
  //   concatMap(() => concat(
  //     of(new WallpaperActions.RecentLoading()),
  //     this.unsplashApi.getLast15()
  //       .pipe(
  //         delay(1500),
  //         switchMap(last15 => [
  //           new WallpaperActions.AddRecentWallpapers(last15),
  //           new WallpaperActions.RecentLoaded(),
  //         ]),
  //         catchError(() => EMPTY)   // TODO Error Handling
  //       )))
  // );

}
