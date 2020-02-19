webpackJsonp([4],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationPageModule", function() { return OperationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OperationPageModule = (function () {
    function OperationPageModule() {
    }
    OperationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__operation__["a" /* OperationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__operation__["a" /* OperationPage */]),
            ],
        })
    ], OperationPageModule);
    return OperationPageModule;
}());

//# sourceMappingURL=operation.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OperationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OperationPage = (function () {
    function OperationPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.data = {
            viewCtrl: this.viewCtrl
        };
    }
    OperationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OperationPage');
    };
    OperationPage.prototype.dismissOperation = function () {
        this.viewCtrl.dismiss();
    };
    OperationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-operation',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/operation/operation.html"*/'<!--\n  Generated template for the OperationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      \n    <ion-title>\n      <span text-color="title_color">App da beleza</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <p style="font-size: 3rem;text-align: center;"><strong>Para utilizar o GetBeauty é necessário seguir 4 passos simples!</strong></p>\n  \n  <ion-slides pager="true" class=\'howwork\'>\n    <ion-slide>\n      <img src=\'../../assets/imgs/ico-procura.png\' >\n      <h1>Escolha o que você procura da beleza</h1>\n    </ion-slide>\n  \n    <ion-slide>\n        <img src=\'../../assets/imgs/ico-agenda.png\' >\n        <h1>Faça um cadastro rápido</h1>\n    </ion-slide>\n  \n    <ion-slide>\n        <img src=\'../../assets/imgs/ico-opcao.png\' >\n        <h1>Escolha um dos artistas sugeridos pelo GetBeauty</h1>\n    </ion-slide>\n\n    <ion-slide>\n        <img src=\'../../assets/imgs/ico-escolha.png\' >\n        <h1>Ou pesquise você mesmo o artista em nossa base de dados</h1>\n    </ion-slide>\n  </ion-slides>\n\n  <button ion-button full style="background-color: rgb(21, 21, 25);color: rgb(200, 150, 0)" (click)="dismissOperation()">Ok, entendi!</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/operation/operation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], OperationPage);
    return OperationPage;
}());

//# sourceMappingURL=operation.js.map

/***/ })

});
//# sourceMappingURL=4.js.map