(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hovereffect {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n  background: linear-gradient(45deg, #ff89e9 0%,#05abe0 100%);\n}\n\n.hovereffect .overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  padding: 3em;\n  text-align: left;\n}\n\n.hovereffect img {\n  display: block;\n  position: relative;\n  max-width: none;\n  width: calc(100% + 60px);\n  transition: opacity 0.35s, -webkit-transform 0.45s;\n  transition: opacity 0.35s, transform 0.45s;\n  transition: opacity 0.35s, transform 0.45s, -webkit-transform 0.45s;\n  -webkit-transform: translate3d(-40px,0,0);\n  transform: translate3d(-40px,0,0);\n}\n\n.hovereffect h2 {\n  text-transform: uppercase;\n  color: #fff;\n  position: relative;\n  font-size: 17px;\n  background-color: transparent;\n  padding: 15% 0 10px 0;\n  text-align: left;\n}\n\n.hovereffect .overlay:before {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  bottom: 20px;\n  left: 20px;\n  border: 1px solid #fff;\n  content: '';\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transition: opacity 0.35s, -webkit-transform 0.45s;\n  transition: opacity 0.35s, transform 0.45s;\n  transition: opacity 0.35s, transform 0.45s, -webkit-transform 0.45s;\n  -webkit-transform: translate3d(-20px,0,0);\n  transform: translate3d(-20px,0,0);\n}\n\n.hovereffect a, .hovereffect p {\n  color: #FFF;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transition: opacity 0.35s, -webkit-transform 0.45s;\n  transition: opacity 0.35s, transform 0.45s;\n  transition: opacity 0.35s, transform 0.45s, -webkit-transform 0.45s;\n  -webkit-transform: translate3d(-10px,0,0);\n  transform: translate3d(-10px,0,0);\n}\n\n.hovereffect:hover img {\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n\n.hovereffect:hover .overlay:before,\n.hovereffect:hover a, .hovereffect:hover p {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<div class=\"container m-t-1\">\n  <div class=\"jumbotron text-center\" style=\"background-color:#17a2b8 \">\n   <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Cook-a-thon';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recipe-detail/recipe-detail.component */ "./src/app/components/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _directives_image_overlay_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/image-overlay.directive */ "./src/app/directives/image-overlay.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: 'recipeDetail/:recipeID', component: _components_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _directives_image_overlay_directive__WEBPACK_IMPORTED_MODULE_11__["ImageOverlayDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientJsonpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- The hard coded URLs example-->\n<!--<nav class=\"navbar navbar-expand-sm navbar-dark bg-info mb-3\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"/#/\">Cook-a-thon</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/#/\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          &lt;!&ndash;<a class=\"nav-link\" href=\"/#/about\">About</a>&ndash;&gt;\n          <a class=\"nav-link\" href=\"/#/about\">About</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a  class=\"nav-link\" href=\"/#/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/#/register\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>-->\n\n\n\n\n<!-- The router example-->\n<!--<nav class=\"navbar navbar-expand-sm navbar-dark bg-info mb-3\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" (click)=\"goHome()\">Cook-a-thon</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goHome()\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goAbout()\" >About</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a  class=\"nav-link\" (click)=\"goLogin()\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goRegister()\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>-->\n\n\n<!-- The routerLink Directive example: -->\n\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-info mb-3\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['home']\">Cook-a-thon</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink] = \"['home']\">Home</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['about']\">About</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['search']\">Inspiration</a>\n        </li>\n      </ul>\n      <ul *ngIf=\"!isLoggedIn\" class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a  class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['register']\">Register</a>\n        </li>\n      </ul>\n      <ul *ngIf=\"isLoggedIn\" class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item dropdown\">\n          <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" id=\"navbarDropdownMenuLink\">Recipe Ideas</a>\n          <div class=\"dropdown-menu\">\n            <a href=\"/ideas\" class=\"dropdown-item\">Recipes</a>\n            <a href=\"/ideas/add\" class=\"dropdown-item\">Add Recipes</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/users/logout\" class=\"nav-link\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n\n<!--<nav class=\"navbar navbar-expand-sm navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"/\">VidJot</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/about\">About</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        {{#if user}}\n        <li class=\"nav-item dropdown\">\n          <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" id=\"navbarDropdownMenuLink\">Video Ideas</a>\n          <div class=\"dropdown-menu\">\n            <a href=\"/ideas\" class=\"dropdown-item\">Ideas</a>\n            <a href=\"/ideas/add\" class=\"dropdown-item\">Add Idea</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/users/logout\" class=\"nav-link\">Logout</a>\n        </li>\n        {{else}}\n        <li class=\"nav-item\">\n          <a href=\"/users/login\" class=\"nav-link\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/users/register\" class=\"nav-link\">Register</a>\n        </li>\n        {{/if}}\n      </ul>\n    </div>\n  </div>\n</nav>-->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.isLoggedIn = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.goHome = function () {
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.goSearch = function () {
        this.router.navigate(['search']);
    };
    NavbarComponent.prototype.goAbout = function () {
        this.router.navigate(['about']);
    };
    NavbarComponent.prototype.goLogin = function () {
        this.router.navigate(['login']);
    };
    NavbarComponent.prototype.goRegister = function () {
        this.router.navigate(['register']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-detail/recipe-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/recipe-detail/recipe-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipe-detail/recipe-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/recipe-detail/recipe-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recipe-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/recipe-detail/recipe-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/recipe-detail/recipe-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(route) {
        this.route = route;
        this.route.params.subscribe(function (params) { return console.log(params); });
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
    };
    RecipeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/components/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/components/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hovereffect {\n  width:100%;\n  height:100%;\n  float:left;\n  overflow:hidden;\n  position:relative;\n  text-align:center;\n  cursor:default;\n}\n\n.hovereffect .overlay {\n  width:100%;\n  height:100%;\n  position:absolute;\n  overflow:hidden;\n  top:0;\n  left:0;\n  opacity:0;\n  background-color:rgba(0,0,0,0.5);\n  transition:all .4s ease-in-out\n}\n\n.hovereffect img {\n  display:block;\n  position:relative;\n  transition:all .4s linear;\n}\n\n.hovereffect h2 {\n  text-transform:uppercase;\n  color:#fff;\n  text-align:center;\n  position:relative;\n  font-size:17px;\n  background:rgba(0,0,0,0.6);\n  -webkit-transform:translatey(-100px);\n  transform:translatey(-100px);\n  transition:all .2s ease-in-out;\n  padding:10px;\n}\n\n.hovereffect a.info {\n  text-decoration:none;\n  display:inline-block;\n  text-transform:uppercase;\n  color:#fff;\n  border:1px solid #fff;\n  background-color:transparent;\n  opacity:0;\n  filter:alpha(opacity=0);\n  transition:all .2s ease-in-out;\n  margin:50px 0 0;\n  padding:7px 14px;\n}\n\n.hovereffect a.info:hover {\n  box-shadow:0 0 5px #fff;\n}\n\n.hovereffect:hover img {\n  -webkit-transform:scale(1.2);\n  transform:scale(1.2);\n}\n\n.hovereffect:hover .overlay {\n  opacity:1;\n  filter:alpha(opacity=100);\n}\n\n.hovereffect:hover h2,.hovereffect:hover a.info {\n  opacity:1;\n  filter:alpha(opacity=100);\n  -webkit-transform:translatey(0);\n  transform:translatey(0);\n}\n\n.hovereffect:hover a.info {\n  transition-delay:.2s;\n}\n"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <input type=\"search\"\n           class=\"form-control\"\n           placeholder=\"Please enter search term\"\n           [formControl]=\"searchField\">\n  </div>\n  <button type=\"button\"\n          class=\"btn btn-secondary\"\n          (click)=\"onSearch(search.value)\">\n    Search\n  </button>\n</form>\n\n<hr/>\n\n<div class=\"text-center\">\n  <p class=\"lead\"\n     *ngIf=\"loading\">Loading...</p>\n</div>\n\n<div class=\"row \" >\n\n  <div class=\"col-4\" *ngFor=\"let recipe of recipes\" >\n    <div class=\"card border-secondary mb-3\" appImageOverlay>\n      <div id=\"imageHolder\">\n        <img class=\"card-img-top img-responsive \" src={{recipe.image}} alt=\"Card image cap\">\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{recipe.label}}</h5>\n      </div>\n      <ul class=\"list-group list-group-flush\" id=\"detailsList\" style=\"display: none;\">\n        <li class=\"list-group-item\">Calories: {{recipe.calories|number}}</li>\n        <li class=\"list-group-item\">Total Weight: {{recipe.totalWeight|number}}</li>\n        <li class=\"list-group-item\">Total Time : {{recipe.totalTime | number}}  minutes</li>\n        <li class=\"list-group-item\"># : {{recipe.healthLabels }} </li>\n      </ul>\n\n      <div class=\"card-footer align-content-center\">\n        <a [routerLink]=\"['/recipeDetail', recipe.uri]\" class=\"btn btn-primary \">Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_recipe_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe-details.service */ "./src/app/services/recipe-details.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _models_recipe_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/recipe-item */ "./src/app/models/recipe-item.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.searches = [];
    }
    SearchComponent.prototype.mapRecipes = function (recipes) {
        this.recipes = recipes.hits.map(function (item) {
            return new _models_recipe_item__WEBPACK_IMPORTED_MODULE_3__["RecipeItem"](item.recipe.uri, item.recipe.label, item.recipe.image, item.recipe.source, item.recipe.shareAs, item.recipe.url, item.recipe.calories, item.recipe.totalWeight, item.recipe.totalTime, item.recipe.healthLabels);
        });
    };
    SearchComponent.prototype.getRecipes = function (term) {
        var _this = this;
        term = term || '';
        /**
         * The Code which fetches the data using the promises...
         */
        /*this.recipeService.getRecipesThroughPromise(term).then(recipes =>{
             console.log(recipes);
             this.mapRecipes(recipes);
           });
    */
        /**
         * The code which uses the observer-subscriber model
         *
         */
        this.recipeService.getRecipesThroughObservables(term).subscribe(function (recipes) {
            console.log(recipes);
            _this.mapRecipes(recipes);
        });
    };
    SearchComponent.prototype.onSearch = function (term) {
        //this.router.navigate(['search', {term: term}]);
        this.getRecipes(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecipes('');
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.searchField.valueChanges
            .debounceTime(600)
            .distinctUntilChanged()
            .subscribe(function (term) {
            _this.onSearch(term);
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")],
            providers: [_services_recipe_details_service__WEBPACK_IMPORTED_MODULE_1__["RecipeDetailsService"]]
        }),
        __metadata("design:paramtypes", [_services_recipe_details_service__WEBPACK_IMPORTED_MODULE_1__["RecipeDetailsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/directives/image-overlay.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/image-overlay.directive.ts ***!
  \*******************************************************/
/*! exports provided: ImageOverlayDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageOverlayDirective", function() { return ImageOverlayDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageOverlayDirective = /** @class */ (function () {
    function ImageOverlayDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ImageOverlayDirective.prototype.onMouseOver = function () {
        var part = this.el.nativeElement.querySelector('#detailsList');
        this.renderer.setStyle(part, 'display', 'block');
    };
    ImageOverlayDirective.prototype.onMouseOut = function () {
        var part = this.el.nativeElement.querySelector('#detailsList');
        this.renderer.setStyle(part, 'display', 'none');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImageOverlayDirective.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImageOverlayDirective.prototype, "onMouseOut", null);
    ImageOverlayDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appImageOverlay]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ImageOverlayDirective);
    return ImageOverlayDirective;
}());



/***/ }),

/***/ "./src/app/models/recipe-item.ts":
/*!***************************************!*\
  !*** ./src/app/models/recipe-item.ts ***!
  \***************************************/
/*! exports provided: RecipeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItem", function() { return RecipeItem; });
var RecipeItem = /** @class */ (function () {
    function RecipeItem(uri, label, image, source, shareAs, url, calories, totalWeight, totalTime, healthLabels) {
        this.uri = uri;
        this.label = label;
        this.image = image;
        this.source = source;
        this.shareAs = shareAs;
        this.url = url;
        this.calories = calories;
        this.totalWeight = totalWeight;
        this.totalTime = totalTime;
        this.healthLabels = healthLabels;
    }
    return RecipeItem;
}());



/***/ }),

/***/ "./src/app/services/recipe-details.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/recipe-details.service.ts ***!
  \****************************************************/
/*! exports provided: RecipeDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsService", function() { return RecipeDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeDetailsService = /** @class */ (function () {
    function RecipeDetailsService(httpClient) {
        this.httpClient = httpClient;
        this.appID = '180dee57';
        this.appKey = '4f5cf80a4658040d1ff64a158b58c978';
        this.apiRoot = "https://api.edamam.com/search";
        this.loading = false;
    }
    /**
     * This is the method for fetching via the Promises.
     * It requires the CORS workaround.
     * @param term
     * @returns {Promise<any>}
     */
    RecipeDetailsService.prototype.getRecipesThroughPromise = function (term) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var searchTerm = term || 'protein';
            /**
             *First we construct a url which will instruct iTunes to perform a search for us, like so:
             */
            var apiURL = _this.apiRoot + "?q=" + searchTerm + "&app_id=" + _this.appID + "&app_key=" + _this.appKey + "&from=0&to=20&calories=591-722&health=vegetarian";
            /**
             * Then we make the GET request to that URL
             */
            _this.httpClient.get(apiURL)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
    };
    RecipeDetailsService.prototype.getRecipesThroughObservables = function (term) {
        var searchTerm = term || 'protein';
        var apiURL = this.apiRoot + "?q=" + searchTerm + "&app_id=" + this.appID + "&app_key=" + this.appKey + "&from=0&to=20&calories=591-722&health=vegetarian";
        return this.httpClient.get(apiURL);
    };
    RecipeDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecipeDetailsService);
    return RecipeDetailsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/viveksh2/WebstormProjects/MeanStackCode/04_Angular_Class_4/02_finish/ucsc-forms-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map