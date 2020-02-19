webpackJsonp([0],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProcurarPageModule", function() { return UserProcurarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_procurar__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProcurarPageModule = (function () {
    function UserProcurarPageModule() {
    }
    UserProcurarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_procurar__["a" /* UserProcurarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_procurar__["a" /* UserProcurarPage */]),
            ],
        })
    ], UserProcurarPageModule);
    return UserProcurarPageModule;
}());

//# sourceMappingURL=user-procurar.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProcurarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(15);
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
 * Generated class for the UserProcurarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProcurarPage = (function () {
    function UserProcurarPage(navCtrl, navParams, viewCtrl, modalCtrl, loadingCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'getstations' };
        this.isRefreshing = false;
        this.mapa_pronto = 0;
        this.viewCtrl = this.navParams.get('viewCtrl');
    }
    UserProcurarPage.prototype.ionViewDidLoad = function () {
        // is called when the page DOM has been loaded, before than
        //  the page is shown, also a single time per page 
        // instantiation, here you can do initialization thet needs
        //  the HTML DOM to be ready
        console.log('ionViewDidLoad UserProcurarPage');
        this.abreCarregando();
    };
    UserProcurarPage.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.getStations();
    };
    UserProcurarPage.prototype.ionViewDidEnter = function () {
        // is the same but called just after the page is shown,
        //  maybe multiple times if the page goes in background 
        //  and returns, for instance you could show an alert just
        //  when the page become in front
    };
    UserProcurarPage.prototype.dismissUserTab = function () {
        this.viewCtrl.dismiss(0, '', { animate: true, direction: 'forward' });
    };
    UserProcurarPage.prototype.modalModalTab = function () {
        var modal = this.modalCtrl.create('ModalTabsPage');
        modal.present();
    };
    UserProcurarPage.prototype.getStations = function () {
        var _this = this;
        var myData = JSON.stringify(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.lista_stations = result;
            // for (var i in this.lista_stations) {
            //   this.arr_list_stations.push(this.lista_stations[i]);
            // }
            _this.lat_inicial = JSON.parse(_this.lista_stations[0].latitude);
            _this.lng_inicial = JSON.parse(_this.lista_stations[0].latitude);
            console.log(result);
            console.log(_this.lat_inicial, _this.lng_inicial);
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
            _this.fechaCarregando();
            // while( this.mapa_pronto == 0 );
            // this.ngAfterViewInit_();
        }, function (err) {
            console.log(err);
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
            _this.fechaCarregando();
        });
    };
    UserProcurarPage.prototype.abreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando...",
        });
        this.loader.present();
    };
    UserProcurarPage.prototype.fechaCarregando = function () {
        this.loader.dismiss();
    };
    UserProcurarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-procurar',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/user-procurar/user-procurar.html"*/'<!--\n  Generated template for the UserProcurarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Usuário</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  pagina de busca de profissional\n\n  <!--<button ion-button full (click)="modalModalTab()">Show ModalTabs</button>\n  -->\n  <P></P>\n  <button ion-button full (click)="dismissUserTab()">Voltar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/user-procurar/user-procurar.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], UserProcurarPage);
    return UserProcurarPage;
}());

//# sourceMappingURL=user-procurar.js.map

/***/ })

});
//# sourceMappingURL=0.js.map