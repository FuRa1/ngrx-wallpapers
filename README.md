# Ngrx unsplash Wallpapers

ngrx-store app reference

### - Standard action -

##### Create Action

```ts
export const addWallpaperToFavorites = createAction(
  ADD_WALLPAPER_TO_FAVORITES,
  props<{ paper: IWallpaper }>()
);
```

##### Create Reducer

```ts
export const reducer = createReducer(
  initialState,
  on(WallpaperActions.addWallpaperToFavorites, (state, { paper }) => ({
    ...state,
    favorites: [
      paper,
      ...state.favorites.filter((fav: IWallpaper) => fav.id !== paper.id )
      ]
    })
  ),
    // .... next 
);
```

##### Dispatch from component
```ts
public addToFavorites(paper: IWallpaper): void {
  this.store.dispatch(addWallpaperToFavorites({ paper }));
}
```

### - Async action -

##### Create Effect

```ts
@Injectable()
export class WallpapersEffects {
  loadRecent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_RECENT_WALLPAPERS), // Action Pipe
      concatMap(() => concat(
        of(WallpaperActions.recentLoading()), // Dispatch Action Run loader
        this.unsplashApi.getLast15() // Common httpClient api service
          .pipe(
            switchMap(recent => [
              WallpaperActions.loadRecentSuccess({ recent }), // Dispatch Action when contentvloaded 
            ]),
            catchError(() => EMPTY) // Error Handle
          )))
    )
  );

  constructor(private actions$: Actions, private unsplashApi: UnsplashApiService) {}
}
```

```ts 
 this.store.dispatch({type: GET_RECENT_WALLPAPERS});
```



#### You need to set Unsplash API key

src/app/unsplash-api.const.ts

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


###### Future plans
Animation on route

Code coverage(unit test ngrx-store)
