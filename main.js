(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workplace\ngrx-wallpapers\src\main.ts */"zUnb");


/***/ }),

/***/ "3s+D":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/wallpapers.actions */ "rFyw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/grid/grid.component */ "m4bG");







class FavoritesComponent {
    constructor(store) {
        this.store = store;
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('wallpapers'))
            .subscribe(data => (this.favorites = data.favorites));
    }
    ngOnInit() {
    }
    removeFromFavorites(wallpaper) {
        this.store.dispatch(_actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_2__["removeWallpaperFromFavorites"]({ paper: wallpaper }));
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 4, vars: 3, consts: [["routerLink", "../dashboard", 1, "nav-link"], [3, "wallpapers", "actionName", "action"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wallpapers", ctx.favorites)("actionName", "Remove")("action", ctx.removeFromFavorites.bind(ctx));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: white;\n  height: calc(80vh + 45px);\n  overflow-y: auto;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJDSFE7RURJUix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLG1CQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvYXBwL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbnNlY3Rpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyaWQtYmc7XHJcbiAgaGVpZ2h0OiBjYWxjKDgwdmggKyA0NXB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm5hdi1saW5re1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIiwiJGdyaWQtYmc6IHdoaXRlO1xyXG4kY292ZXItYmc6ICMxRTI1Mjc7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "4Z5w":
/*!***********************************************!*\
  !*** ./src/app/actions/wallpapers.effects.ts ***!
  \***********************************************/
/*! exports provided: GET_RECENT_WALLPAPERS, SEARCH_WALLPAPERS, WallpapersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECENT_WALLPAPERS", function() { return GET_RECENT_WALLPAPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_WALLPAPERS", function() { return SEARCH_WALLPAPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallpapersEffects", function() { return WallpapersEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _wallpapers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallpapers.actions */ "rFyw");
/* harmony import */ var _api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/unsplash-api.service */ "aHjy");








const GET_RECENT_WALLPAPERS = '[WALLPAPERS] Recent';
const SEARCH_WALLPAPERS = '[SEARCH_WALLPAPERS] Search';
class WallpapersEffects {
    constructor(actions$, unsplashApi) {
        this.actions$ = actions$;
        this.unsplashApi = unsplashApi;
        this.loadRecent$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(GET_RECENT_WALLPAPERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_wallpapers_actions__WEBPACK_IMPORTED_MODULE_4__["recentLoading"]()), // Dispatch Action Run loader
        this.unsplashApi.getLast15() // Common httpClient api service
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(recent => [
            _wallpapers_actions__WEBPACK_IMPORTED_MODULE_4__["loadRecentSuccess"]({ recent }),
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"]) // TODO Error Handling
        )))));
        this.searchPapers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(SEARCH_WALLPAPERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((input) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_wallpapers_actions__WEBPACK_IMPORTED_MODULE_4__["recentLoading"]()), this.unsplashApi.searchWallpapers(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(results => [
            _wallpapers_actions__WEBPACK_IMPORTED_MODULE_4__["loadRecentSuccess"]({ recent: results.results }),
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"]) // TODO Error Handling
        )))));
    }
}
WallpapersEffects.ɵfac = function WallpapersEffects_Factory(t) { return new (t || WallpapersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_5__["UnsplashApiService"])); };
WallpapersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WallpapersEffects, factory: WallpapersEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WallpapersEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_5__["UnsplashApiService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_wallpapers_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/wallpapers.effects */ "4Z5w");
/* harmony import */ var _actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/wallpapers.actions */ "rFyw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "lvYI");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/grid/grid.component */ "m4bG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function DashboardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading ... .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(store) {
        this.store = store;
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('wallpapers'))
            .subscribe(data => {
            this.recent = data.recent;
            this.loading = data.recentLoading;
        });
    }
    addToFavorites(paper) {
        this.store.dispatch(Object(_actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_3__["addWallpaperToFavorites"])({ paper }));
    }
    ngOnInit() {
        if (!this.recent || this.recent && !this.recent.length) {
            this.store.dispatch({ type: _actions_wallpapers_effects__WEBPACK_IMPORTED_MODULE_2__["GET_RECENT_WALLPAPERS"] });
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 4, consts: [["routerLink", "../favorites", 1, "nav-link"], [3, "wallpapers", "actionName", "action"], [4, "ngIf"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wallpapers", ctx.recent)("actionName", "\u2729 Favorite")("action", ctx.addToFavorites.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: white;\n  height: calc(80vh + 45px);\n  overflow-y: auto;\n  width: 80%;\n  margin: 0 auto;\n}\n\napp-search[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJDSFE7RURJUix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG5zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmlkLWJnO1xyXG4gIGhlaWdodDogY2FsYyg4MHZoICsgNDVweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbmFwcC1zZWFyY2h7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCIkZ3JpZC1iZzogd2hpdGU7XHJcbiRjb3Zlci1iZzogIzFFMjUyNztcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ngrx-wallpapers';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-heading"], [1, "app-wrp"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ultimate Wallpapers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".app-wrp[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  margin-top: 53px;\n}\n.app-heading[_ngcontent-%COMP%] {\n  color: white;\n  padding: 15px 0;\n  text-align: center;\n  position: fixed;\n  top: 0;\n  left: calc(50% - 250px);\n  width: 500px;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURKO0FBS0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFwcCB7XHJcbiAgJi13cnAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDUzcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgJi1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xyXG4gICAgd2lkdGg6IDUwMHB4OyAvLyA/P1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "lvYI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "TDBs");
/* harmony import */ var _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites/favorites.module */ "uz0P");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_wallpapers_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/wallpapers.reducer */ "i0wy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_wallpapers_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/wallpapers.effects */ "4Z5w");
/* harmony import */ var _api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/unsplash-api.service */ "aHjy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_12__["UnsplashApiService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
    ], imports: [[
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
            _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_4__["FavoritesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_actions_wallpapers_effects__WEBPACK_IMPORTED_MODULE_11__["WallpapersEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                wallpapers: _reducers_wallpapers_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
        _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_4__["FavoritesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
                    _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_4__["FavoritesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_actions_wallpapers_effects__WEBPACK_IMPORTED_MODULE_11__["WallpapersEffects"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                        wallpapers: _reducers_wallpapers_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]
                    })
                ],
                exports: [],
                providers: [
                    _api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_12__["UnsplashApiService"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aHjy":
/*!*********************************************!*\
  !*** ./src/app/api/unsplash-api.service.ts ***!
  \*********************************************/
/*! exports provided: UnsplashApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashApiService", function() { return UnsplashApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unsplash-js */ "qRbI");
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unsplash_api_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unsplash-api.const */ "t6D1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class UnsplashApiService {
    constructor(http) {
        this.http = http;
        this.unsplash = new unsplash_js__WEBPACK_IMPORTED_MODULE_1___default.a({
            accessKey: _unsplash_api_const__WEBPACK_IMPORTED_MODULE_2__["APP_ACCESS_KEY"],
        });
    }
    getLast15() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.unsplash.photos.listPhotos(2, 15, 'latest').then(unsplash_js__WEBPACK_IMPORTED_MODULE_1__["toJson"]));
    }
    searchWallpapers(input) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.unsplash.search.photos(input.searchString, 1, 15, { orientation: 'portrait' }).then(unsplash_js__WEBPACK_IMPORTED_MODULE_1__["toJson"]));
    }
    download(url, name) {
        this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ Accept: '*/*' }),
            responseType: 'blob',
        })
            .subscribe(blob => {
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
UnsplashApiService.ɵfac = function UnsplashApiService_Factory(t) { return new (t || UnsplashApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UnsplashApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnsplashApiService, factory: UnsplashApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnsplashApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "i0wy":
/*!************************************************!*\
  !*** ./src/app/reducers/wallpapers.reducer.ts ***!
  \************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/wallpapers.actions */ "rFyw");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const initialState = {
    recent: [],
    favorites: [],
    recentLoading: false,
    recentLoaded: false,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_0__["loadRecentSuccess"], (state, { recent }) => (Object.assign(Object.assign({}, state), { recent, recentLoaded: true, recentLoading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_0__["recentLoading"], (state) => (Object.assign(Object.assign({}, state), { recentLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_0__["addWallpaperToFavorites"], (state, { paper }) => (Object.assign(Object.assign({}, state), { favorites: [paper, ...state.favorites.filter((fav) => fav.id !== paper.id)
    ] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_wallpapers_actions__WEBPACK_IMPORTED_MODULE_0__["removeWallpaperFromFavorites"], (state, { paper }) => (Object.assign(Object.assign({}, state), { favorites: state.favorites.filter((wallpaper) => {
        return wallpaper.id !== paper.id;
    }) }))));


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "m4bG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





class SharedComponentsModule {
}
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "lvYI":
/*!******************************************************!*\
  !*** ./src/app/dashboard/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_wallpapers_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/wallpapers.effects */ "4Z5w");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");







class SearchComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.initSearchForm();
    }
    initSearchForm() {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.searchForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500))
            .subscribe((values) => {
            this.store.dispatch({ type: _actions_wallpapers_effects__WEBPACK_IMPORTED_MODULE_3__["SEARCH_WALLPAPERS"], searchString: values.search });
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 3, vars: 1, consts: [[1, "search-form", 3, "formGroup"], ["for", "searchInput"], ["formControlName", "search", "placeholder", "Audi, Fresh, Red", "id", "searchInput"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".search-form[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px 0;\n  display: flex;\n  justify-content: center;\n}\n.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 10px;\n  font-size: 15px;\n  border-radius: 5px;\n}\n.search-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-basis: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "m4bG":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/unsplash-api.service */ "aHjy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GridComponent_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_ng_container_1_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const wallpaper_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.download(wallpaper_r2, "regular"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2193 Regular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridComponent_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_ng_container_1_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const wallpaper_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.download(wallpaper_r2, "full"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2193 Full");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridComponent_ng_container_1_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GridComponent_ng_container_1_span_5_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_ng_container_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const wallpaper_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.dispatchAction(wallpaper_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const wallpaper_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wallpaper_r2.urls.regular);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wallpaper_r2.urls.regular);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.actionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.actionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + wallpaper_r2.urls.regular + ")");
} }
function GridComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GridComponent {
    constructor(unsplashApi) {
        this.unsplashApi = unsplashApi;
    }
    ngOnInit() {
    }
    dispatchAction(paper) {
        this.action(paper);
    }
    download(paper, size) {
        this.unsplashApi.download(paper.urls[size], `${paper.id}_${size}`);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_1__["UnsplashApiService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], inputs: { wallpapers: "wallpapers", action: "action", actionName: "actionName" }, decls: 3, vars: 2, consts: [[1, "grid-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "grid-item"], [1, "grid-content-wrapper"], [1, "grid-actions"], [3, "click", 4, "ngIf"], [3, "ngClass", "click"], [1, "grid-image"], [3, "click"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_ng_container_1_Template, 9, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridComponent_div_2_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wallpapers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.papers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-gap: 15px;\n  grid-row-gap: 15px;\n  grid-template-columns: repeat(3, 1fr);\n  background-color: white;\n  padding: 15px;\n  flex-wrap: wrap;\n}\n.grid-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 1;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n}\n.grid-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n}\n.grid-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 40vh;\n  transition-delay: 0.3s;\n  transition: all 0.3s linear;\n}\n.grid-item[_ngcontent-%COMP%]:hover   .grid-content-wrapper[_ngcontent-%COMP%]   .grid-actions[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n.grid-actions[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 14px;\n  padding: 0 10px;\n  font-size: 14px;\n  transition: opacity 0.2s ease-out;\n  opacity: 0;\n}\n.grid-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  box-shadow: 2px 1px 4px grey;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 15px;\n  border-radius: 5px;\n  background-color: white;\n  transition: box-shadow 150ms linear;\n  margin: 0 5px;\n  text-decoration: none;\n  color: inherit;\n}\n.grid-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .grid-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus {\n  background-color: aliceblue;\n}\n.grid-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:active {\n  background-color: #d7ecff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkNUTTtFRFVOLGFBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQU9FO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQU5KO0FBVVE7RUFDRSxxQkFBQTtBQVJWO0FBZUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFiSjtBQWVJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQWJOO0FBY007RUFDRSwyQkFBQTtBQVpSO0FBZU07RUFDRSx5QkFBQTtBQWJSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLy8gdHJpZ2dlciBhbmltYXRpb25cclxuLmdyaWQge1xyXG4gICYtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDE1cHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDE1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyaWQtYmc7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgJi1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHZoOyAvLyBUT0RPIE1FRElBIFFVRVJZIFNJWkVcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4zMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC5ncmlkLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgLmdyaWQtYWN0aW9ucyB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1hY3Rpb25zIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDRweCBncmV5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihhbGljZWJsdWUsIDUlKTtcclxuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBsaW5lYXI7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbihhbGljZWJsdWUsIDUlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZ3JpZC1iZzogd2hpdGU7XHJcbiRjb3Zlci1iZzogIzFFMjUyNztcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss']
            }]
    }], function () { return [{ type: _api_unsplash_api_service__WEBPACK_IMPORTED_MODULE_1__["UnsplashApiService"] }]; }, { wallpapers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actionName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rFyw":
/*!***********************************************!*\
  !*** ./src/app/actions/wallpapers.actions.ts ***!
  \***********************************************/
/*! exports provided: RECENT_LOADING, RECENT_LOADED, ADD_RECENT_WALLPAPERS, ADD_WALLPAPER_TO_FAVORITES, REMOVE_WALLPAPER_FROM_FAVORITES, loadRecentSuccess, addWallpaperToFavorites, removeWallpaperFromFavorites, recentLoading, recentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECENT_LOADING", function() { return RECENT_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECENT_LOADED", function() { return RECENT_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECENT_WALLPAPERS", function() { return ADD_RECENT_WALLPAPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_WALLPAPER_TO_FAVORITES", function() { return ADD_WALLPAPER_TO_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_WALLPAPER_FROM_FAVORITES", function() { return REMOVE_WALLPAPER_FROM_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRecentSuccess", function() { return loadRecentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWallpaperToFavorites", function() { return addWallpaperToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWallpaperFromFavorites", function() { return removeWallpaperFromFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recentLoading", function() { return recentLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recentLoaded", function() { return recentLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const RECENT_LOADING = '[WALLPAPERS] Recent Loading';
const RECENT_LOADED = '[WALLPAPERS] Recent Loaded';
const ADD_RECENT_WALLPAPERS = '[WALLPAPERS] Add Recent';
const ADD_WALLPAPER_TO_FAVORITES = '[WALLPAPERS] Add';
const REMOVE_WALLPAPER_FROM_FAVORITES = '[WALLPAPERS] Remove';
const loadRecentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_RECENT_WALLPAPERS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addWallpaperToFavorites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_WALLPAPER_TO_FAVORITES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeWallpaperFromFavorites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REMOVE_WALLPAPER_FROM_FAVORITES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const recentLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RECENT_LOADING);
const recentLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RECENT_LOADED);


/***/ }),

/***/ "t6D1":
/*!***************************************!*\
  !*** ./src/app/unsplash-api.const.ts ***!
  \***************************************/
/*! exports provided: APP_ACCESS_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ACCESS_KEY", function() { return APP_ACCESS_KEY; });
const APP_ACCESS_KEY = 'NqEykddHFY9PuAofQ4tstk7hRyPO1BR3x7ZCZIv_b3k';


/***/ }),

/***/ "uz0P":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesModule", function() { return FavoritesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.component */ "3s+D");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");





class FavoritesModule {
}
FavoritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FavoritesModule });
FavoritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FavoritesModule_Factory(t) { return new (t || FavoritesModule)(); }, imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["SharedComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavoritesModule, { declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_1__["FavoritesComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["SharedComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_1__["FavoritesComponent"]],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_3__["SharedComponentsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites/favorites.component */ "3s+D");






const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map