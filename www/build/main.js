webpackJsonp([5],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NavController } from 'ionic-angular';
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SessionProvider = (function () {
    function SessionProvider(
        // public navCtrl: NavController, 
        storageProvider, appCtrl) {
        this.storageProvider = storageProvider;
        this.appCtrl = appCtrl;
        // Variavel para jwt do usuario
        this.usuario = { jwt: '', login: '', status_user: 0 };
        console.log('Hello SessionProvider Provider');
        // console.log( 'criou uma instancia de usuario' );
        //this.usuario.jwt = '';
        // inicialização das variaveis do usuário
        this.initUser();
    }
    SessionProvider.prototype.activeUser = function (login, jwt, status_user) {
        var _this = this;
        this.usuario.jwt = jwt;
        this.usuario.login = login;
        this.usuario.status_user = status_user;
        return new Promise(function (result) {
            _this.storageProvider.grava_storage('jwt_user', _this.usuario).then(function (val) {
                val = true;
                console.log("salvou usuario", _this.usuario.jwt);
                result(val);
            });
        });
    };
    SessionProvider.prototype.initUser = function () {
        var _this = this;
        this.storageProvider.le_storage('jwt_user').then(function (val) {
            if (val == null) {
                console.log('inicializou a memoria com um usuario zerado');
                _this.usuario.jwt = '';
                _this.usuario.login = '';
                _this.usuario.status_user = 0;
                _this.storageProvider.grava_storage('jwt_user', _this.usuario);
            }
            else {
            }
        });
    };
    SessionProvider.prototype.LogOffUser = function () {
        this.usuario.jwt = '';
        this.usuario.status_user = 0;
        console.log('zerou jwt');
        this.storageProvider.grava_storage('jwt_user', this.usuario);
        // this.appCtrl.getRootNav().push(MainPage);
    };
    SessionProvider.prototype.readUser = function () {
        var _this = this;
        return new Promise(function (result) {
            _this.storageProvider.le_storage('jwt_user').then(function (val) {
                _this.usuario.jwt = val.jwt;
                _this.usuario.login = val.login;
                _this.usuario.status_user = val.status_user;
                console.log("Read User:", _this.usuario);
                result(val);
            });
        });
    };
    SessionProvider.prototype.saveNewJwt = function (new_jwt) {
        this.usuario.jwt = new_jwt;
        this.storageProvider.grava_storage('jwt_user', this.usuario);
        console.log('Salvou novo JWT');
    };
    SessionProvider.prototype.checkLogin = function () {
        if ((this.usuario.jwt == '') || (this.usuario.jwt == null) || (this.usuario.jwt == undefined)) {
            console.log('pagina nao autorizada');
            return false;
        }
        else {
            // console.log( 'autorizacao' );
            return true;
        }
    };
    SessionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.BaseURLAPI = "http://www.getbeauty.com.br/";
        //console.log('Hello RestProvider Provider');
    }
    // Exemplo funcional de GET
    RestProvider.prototype.getStationsStatus = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.BaseURLAPI + "api.php").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // Exemplo funcional de POST
    RestProvider.prototype.RequestAPIServer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //this.http.post(this.BaseURLAPI+'api.php', JSON.stringify(data))
            _this.http.post(_this.BaseURLAPI + 'api.php', data /*, {responseType: 'text'}*/)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FunctionsProvider = (function () {
    function FunctionsProvider(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        console.log('Hello FunctionsProvider Provider');
    }
    FunctionsProvider.prototype.ShowLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: '',
            dismissOnPageChange: true,
            showBackdrop: false,
        });
        this.loading.present();
    };
    FunctionsProvider.prototype.DismmissLoading = function () {
        this.loading.dismiss();
    };
    FunctionsProvider.prototype.ShowAlert = function (txt, timeout, _dismissOnPageChange_) {
        this.toast = this.toastCtrl.create({
            message: txt,
            duration: timeout,
            position: 'top',
            dismissOnPageChange: _dismissOnPageChange_,
        });
        this.toast.present();
    };
    FunctionsProvider.prototype.DismmissAlert = function () {
        this.toast.dismiss();
    };
    FunctionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], FunctionsProvider);
    return FunctionsProvider;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro1/cadastro1.module": [
		168
	],
	"../pages/cadastro2/cadastro2.module": [
		162
	],
	"../pages/cadcel/cadcel.module": [
		171
	],
	"../pages/cadcep/cadcep.module": [
		177
	],
	"../pages/cademail/cademail.module": [
		178
	],
	"../pages/cadnome/cadnome.module": [
		179
	],
	"../pages/cadprocat/cadprocat.module": [
		180
	],
	"../pages/cadvalcel/cadvalcel.module": [
		181
	],
	"../pages/main/main.module": [
		182
	],
	"../pages/operation/operation.module": [
		318,
		4
	],
	"../pages/precisagrandearea/precisagrandearea.module": [
		183
	],
	"../pages/precisasubarea/precisasubarea.module": [
		185
	],
	"../pages/procomprar/procomprar.module": [
		186
	],
	"../pages/prodisponiveis/prodisponiveis.module": [
		187
	],
	"../pages/properfil/properfil.module": [
		188
	],
	"../pages/protabs/protabs.module": [
		189
	],
	"../pages/user-dados/user-dados.module": [
		319,
		3
	],
	"../pages/user-historico/user-historico.module": [
		320,
		2
	],
	"../pages/user-main/user-main.module": [
		321,
		1
	],
	"../pages/user-procurar/user-procurar.module": [
		322,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadastro2PageModule", function() { return Cadastro2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro2__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Cadastro2PageModule = (function () {
    function Cadastro2PageModule() {
    }
    Cadastro2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro2__["a" /* Cadastro2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro2__["a" /* Cadastro2Page */]),
            ],
        })
    ], Cadastro2PageModule);
    return Cadastro2PageModule;
}());

//# sourceMappingURL=cadastro2.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cadastro2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadprocat_cadprocat__ = __webpack_require__(85);
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
 * Generated class for the Cadastro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Cadastro2Page = (function () {
    function Cadastro2Page(navCtrl, navParams, restProvider, sessionProvider, formBuilder, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'valida_celular', dataform: { jwt: '', codigo_sms: '' } };
        // Variavel para receber a resposta do servidor
        this.resposta = {};
    }
    Cadastro2Page.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            codigo_sms: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(6),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    Cadastro2Page.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.vj.dataform.codigo_sms = '';
        this.resposta = '';
    };
    Cadastro2Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Cadastro1Page');
    };
    Cadastro2Page.prototype.processValidarCelular = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        this.vj.dataform.jwt = this.sessionProvider.usuario.jwt;
        var myData = JSON.stringify(this.vj);
        console.log(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            _this.resposta = result;
            if (_this.resposta.valida_celular != true) {
                _this.sessionProvider.saveNewJwt(_this.resposta.valida_celular);
                if (_this.resposta.status == 1)
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cadprocat_cadprocat__["a" /* CadprocatPage */]);
                else {
                    _this.vj.dataform.codigo_sms = '';
                    _this.functionsProvider.ShowAlert('Código inválido.', 3000, true);
                }
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    Cadastro2Page.prototype.ReenviaCodigoSMS = function () {
        var _this = this;
        var req = { tipo: 'gera_codigo_envia_sms', dataform: { jwt: this.sessionProvider.usuario.jwt } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.resposta = result;
            console.log('resposta gera_codigo_envia_sms', _this.resposta);
            if (_this.resposta.gera_codigo_envia_sms != false) {
                _this.sessionProvider.usuario.jwt = _this.resposta.gera_codigo_envia_sms;
                _this.functionsProvider.ShowAlert('Novo Código enviado', 3000, true);
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Cadastro2Page.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.sessionProvider.LogOffUser();
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
                break;
        }
    };
    Cadastro2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastro2',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadastro2/cadastro2.html"*/'<!--\n  Generated template for the Cadastro2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>\n        <span text-color="title_color">Validação Celular</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="processValidarCelular()" [formGroup]="credentialsForm">\n    \n    <ion-item>\n      <ion-label color="primary" floating>Informe o codigo enviado por SMS</ion-label>\n      <ion-input type="text" formControlName = "codigo_sms" [(ngModel)]="vj.dataform.codigo_sms"  maxlength="6" ></ion-input>\n    </ion-item>\n    <ion-item class="no-line error" *ngIf="!credentialsForm.controls.codigo_sms.valid  && (credentialsForm.controls.codigo_sms.dirty || submitAttempt) && !credentialsForm.controls.codigo_sms.pending">\n        <p *ngIf="credentialsForm.value.codigo_sms != \'\'">Código inválido</p>\n        <p *ngIf="credentialsForm.value.codigo_sms == \'\'">Preenchimento obrigatório</p>\n    </ion-item>\n\n    <button ion-button type="submit" [disabled]="!credentialsForm.valid" block >Continuar</button>\n  \n  </form>\n\n  <button ion-button (click)="ReenviaCodigoSMS()" >Reenviar SMS</button>\n  <button ion-button (click)="openPage(0)" >Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadastro2/cadastro2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], Cadastro2Page);
    return Cadastro2Page;
}());

//# sourceMappingURL=cadastro2.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(storage) {
        this.storage = storage;
        // this.blank_storage();
        //console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.grava_storage = function (key, valor) {
        return this.storage.set(key, valor);
    };
    StorageProvider.prototype.le_storage = function (key) {
        return this.storage.get(key);
    };
    ;
    StorageProvider.prototype.apaga_storage = function (key) {
        return this.storage.remove(key);
    };
    StorageProvider.prototype.blank_storage = function () {
        // console.log( 'apagou memoria');
        this.storage.clear();
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadastro1PageModule", function() { return Cadastro1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro1__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Cadastro1PageModule = (function () {
    function Cadastro1PageModule() {
    }
    Cadastro1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro1__["a" /* Cadastro1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro1__["a" /* Cadastro1Page */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], Cadastro1PageModule);
    return Cadastro1PageModule;
}());

//# sourceMappingURL=cadastro1.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadcelPageModule", function() { return CadcelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadcel__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadcelPageModule = (function () {
    function CadcelPageModule() {
    }
    CadcelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadcel__["a" /* CadcelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadcel__["a" /* CadcelPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], CadcelPageModule);
    return CadcelPageModule;
}());

//# sourceMappingURL=cadcel.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadcelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadvalcel_cadvalcel__ = __webpack_require__(173);
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
 * Generated class for the CadcelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadcelPage = (function () {
    function CadcelPage(navCtrl, navParams, restProvider, sessionProvider, formBuilder, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'cad_cel', dataform: { celular: '' } };
    }
    CadcelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadcelPage');
    };
    CadcelPage.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.vj.dataform.celular = '';
        if (this.navParams.get('cadastro_user') == 1) {
            console.log('cadastro de usuario');
            this.value_tipo_cadastro = 1;
            this.txt_cadastro_cel = 'Ótimo, agora que sabemos o que procura, precisamos saber quem é você. Primeiro, informe o seu número de celular.';
        }
        else {
            console.log('cadastro de artista');
            this.value_tipo_cadastro = 0;
            this.txt_cadastro_cel = 'Precisamos saber quem é você. Primeiro, informe o seu número de celular.';
        }
    };
    CadcelPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            celular: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(15),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    CadcelPage.prototype.processCadastrarLogin = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var myData = JSON.stringify(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            if (result.cadastro1 != false) {
                // console.log( "resposta informou cadastro1 ok");
                _this.sessionProvider.activeUser(_this.vj.dataform.celular, result.jwt, result.status);
                _this.GeraCodigoEnviaSMS();
            }
            else {
                switch (result.status) {
                    case 1:
                        _this.sessionProvider.activeUser(_this.vj.dataform.celular, result.jwt, result.status);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cadvalcel_cadvalcel__["a" /* CadvalcelPage */], { cadastro_user: _this.value_tipo_cadastro });
                        break;
                    // case 2:
                    //   this.sessionProvider.activeUser( this.vjs.dataform.email, this.resposta.jwt, this.resposta.pais_user, this.resposta.status );
                    //   this.navCtrl.push(Cadastro3Page);
                    //   break;
                    // case 3:
                    // case 4:
                    //   this.sessionProvider.activeUser( this.vjs.dataform.email, this.resposta.jwt, this.resposta.pais_user, this.resposta.status );
                    //   this.navCtrl.push(TabsPage);
                    //   break;
                    default:
                        // this.vj.dataform.senha  = '';
                        // this.vj.dataform.senha2 = '';
                        _this.functionsProvider.ShowAlert('Este email já foi cadastrado', 3000, true);
                        break;
                }
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    CadcelPage.prototype.GeraCodigoEnviaSMS = function () {
        var _this = this;
        var req = { tipo: 'gera_codigo_envia_sms', dataform: { jwt: this.sessionProvider.usuario.jwt } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            if (result.gera_codigo_envia_sms != false) {
                _this.sessionProvider.saveNewJwt(result.gera_codigo_envia_sms);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cadvalcel_cadvalcel__["a" /* CadvalcelPage */], { cadastro_user: _this.value_tipo_cadastro });
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CadcelPage.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
                break;
        }
    };
    CadcelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadcel',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadcel/cadcel.html"*/'<!--\n  Generated template for the CadcelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Cadastro - Celular</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h1>\n    {{this.txt_cadastro_cel}}\n  </h1>\n\n  <form (ngSubmit)="processCadastrarLogin()" [formGroup]="credentialsForm">\n    \n    <ion-item>\n      <ion-label color="primary" floating>Celular</ion-label>\n      <ion-input type="text" formControlName = "celular" [(ngModel)]="vj.dataform.celular"  [brmasker]="{phone: true}" ></ion-input>\n    </ion-item>\n    <ion-item class="no-line error" *ngIf="!credentialsForm.controls.celular.valid  && (credentialsForm.controls.celular.dirty || submitAttempt) && !credentialsForm.controls.celular.pending">\n        <p *ngIf="credentialsForm.value.celular != \'\'">Celular inválido</p>\n        <p *ngIf="credentialsForm.value.celular == \'\'">Preenchimento obrigatório</p>\n    </ion-item>\n    \n    <button ion-button color="dark" class="custom-button" type="submit" [disabled]="!credentialsForm.valid" block >Continuar</button>\n  \n  </form>\n\n  <button ion-button (click)="openPage(0)" >Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadcel/cadcel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], CadcelPage);
    return CadcelPage;
}());

//# sourceMappingURL=cadcel.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadvalcelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cademail_cademail__ = __webpack_require__(174);
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
 * Generated class for the CadvalcelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadvalcelPage = (function () {
    function CadvalcelPage(navCtrl, navParams, restProvider, sessionProvider, formBuilder, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'valida_celular', dataform: { jwt: this.sessionProvider.usuario.jwt, codigo_sms: '' } };
    }
    CadvalcelPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            codigo_sms: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(6),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    CadvalcelPage.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.vj.dataform.codigo_sms = '';
        this.value_tipo_cadastro = this.navParams.get('cadastro_user');
        if (this.value_tipo_cadastro == 1)
            console.log('cadastro de usuario');
        else
            console.log('cadastro de artista');
    };
    CadvalcelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadvalcelPage');
    };
    CadvalcelPage.prototype.processValidarCelular = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var myData = JSON.stringify(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            if (result.valida_celular != true) {
                _this.sessionProvider.saveNewJwt(result.valida_celular);
                if (result.status == 1)
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cademail_cademail__["a" /* CademailPage */], { cadastro_user: _this.value_tipo_cadastro });
                else {
                    _this.vj.dataform.codigo_sms = '';
                    _this.functionsProvider.ShowAlert('Código inválido.', 3000, true);
                }
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    CadvalcelPage.prototype.ReenviaCodigoSMS = function () {
        var _this = this;
        var req = { tipo: 'gera_codigo_envia_sms', dataform: { jwt: this.sessionProvider.usuario.jwt } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            if (result.gera_codigo_envia_sms != false) {
                _this.sessionProvider.usuario.jwt = result.gera_codigo_envia_sms;
                _this.functionsProvider.ShowAlert('Novo Código enviado', 3000, true);
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CadvalcelPage.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.sessionProvider.LogOffUser();
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
                break;
        }
    };
    CadvalcelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadvalcel',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadvalcel/cadvalcel.html"*/'<!--\n  Generated template for the CadvalcelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>\n        <span text-color="title_color">Valida Celular</span>\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n  <ion-content padding>\n    <form (ngSubmit)="processValidarCelular()" [formGroup]="credentialsForm">\n      \n    <ion-item>\n      <ion-label color="primary" floating>Informe o codigo enviado por SMS</ion-label>\n      <ion-input type="text" formControlName = "codigo_sms" [(ngModel)]="vj.dataform.codigo_sms"  maxlength="6" ></ion-input>\n    </ion-item>\n    <ion-item class="no-line error" *ngIf="!credentialsForm.controls.codigo_sms.valid  && (credentialsForm.controls.codigo_sms.dirty || submitAttempt) && !credentialsForm.controls.codigo_sms.pending">\n        <p *ngIf="credentialsForm.value.codigo_sms != \'\'">Código inválido</p>\n        <p *ngIf="credentialsForm.value.codigo_sms == \'\'">Preenchimento obrigatório</p>\n    </ion-item>\n\n    <button ion-button type="submit" [disabled]="!credentialsForm.valid" block >Continuar</button>\n  \n  </form>\n\n  <button ion-button (click)="ReenviaCodigoSMS()" >Reenviar SMS</button>\n  <button ion-button (click)="openPage(0)" >Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadvalcel/cadvalcel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], CadvalcelPage);
    return CadvalcelPage;
}());

//# sourceMappingURL=cadvalcel.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CademailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadnome_cadnome__ = __webpack_require__(175);
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
 * Generated class for the CademailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CademailPage = (function () {
    function CademailPage(navCtrl, navParams, restProvider, sessionProvider, formBuilder, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'cad_email', dataform: { jwt: this.sessionProvider.usuario.jwt, email: '' } };
        // emailREGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailREGEXP = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/;
    }
    CademailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CademailPage');
    };
    CademailPage.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.vj.dataform.email = '';
        //this.resposta = '';
        this.value_tipo_cadastro = this.navParams.get('cadastro_user');
        if (this.value_tipo_cadastro == 1)
            console.log('cadastro de usuario');
        else
            console.log('cadastro de artista');
    };
    CademailPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(this.emailREGEXP),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(60),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    CademailPage.prototype.processCadastrarLogin = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var myData = JSON.stringify(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            if (result.cad_email != false) {
                _this.sessionProvider.saveNewJwt(result.cad_email);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cadnome_cadnome__["a" /* CadnomePage */], { cadastro_user: _this.value_tipo_cadastro });
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    CademailPage.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
                break;
        }
    };
    CademailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cademail',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cademail/cademail.html"*/'<!--\n  Generated template for the CademailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Cadastro - Email</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="processCadastrarLogin()" [formGroup]="credentialsForm">\n      \n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" formControlName = "email" [(ngModel)]="vj.dataform.email"  maxlength="60" ></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.email.valid  && (credentialsForm.controls.email.dirty || submitAttempt) && !credentialsForm.controls.email.pending">\n          <p *ngIf="credentialsForm.value.email != \'\'">Email inválido</p>\n          <p *ngIf="credentialsForm.value.email == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n\n      <button ion-button type="submit" [disabled]="!credentialsForm.valid" block >Continuar</button>\n    \n    </form>\n  \n    <button ion-button (click)="openPage(0)" >Cancelar</button>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cademail/cademail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], CademailPage);
    return CademailPage;
}());

//# sourceMappingURL=cademail.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadnomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadcep_cadcep__ = __webpack_require__(176);
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
 * Generated class for the CadnomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadnomePage = (function () {
    function CadnomePage(navCtrl, navParams, restProvider, sessionProvider, formBuilder, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'cad_nome', dataform: { jwt: this.sessionProvider.usuario.jwt, nome: '' } };
        this.nomeREGEXP = /^([a-zA-ZÁÉÍÓÚÂÊÎÔÛÃÕÇáéíóúâêîôûãõç.'-]+\s+){1,6}[a-zA-zÁÉÍÓÚÂÊÎÔÛÃÕÇáéíóúâêîôûãõç.'-]+$/;
    }
    CadnomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadnomePage');
    };
    CadnomePage.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.vj.dataform.nome = '';
        this.value_tipo_cadastro = this.navParams.get('cadastro_user');
        if (this.value_tipo_cadastro == 1)
            console.log('cadastro de usuario');
        else
            console.log('cadastro de artista');
    };
    CadnomePage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(this.nomeREGEXP),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(200),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    CadnomePage.prototype.processCadastrarLogin = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var myData = JSON.stringify(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            if (result.cad_nome != false) {
                _this.sessionProvider.saveNewJwt(result.cad_nome);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cadcep_cadcep__["a" /* CadcepPage */], { cadastro_user: _this.value_tipo_cadastro });
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    CadnomePage.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
                break;
        }
    };
    CadnomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadnome',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadnome/cadnome.html"*/'<!--\n  Generated template for the CadnomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Cadastro - Nome</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="processCadastrarLogin()" [formGroup]="credentialsForm">\n      \n      <ion-item>\n        <ion-label color="primary" floating>Nome completo</ion-label>\n        <ion-input type="text" formControlName = "nome" [(ngModel)]="vj.dataform.nome"  maxlength="200" ></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.nome.valid  && (credentialsForm.controls.nome.dirty || submitAttempt) && !credentialsForm.controls.nome.pending">\n          <p *ngIf="credentialsForm.value.nome != \'\'">Nome inválido</p>\n          <p *ngIf="credentialsForm.value.nome == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n\n      <button ion-button type="submit" [disabled]="!credentialsForm.valid" block >Continuar</button>\n    \n    </form>\n  \n    <button ion-button (click)="openPage(0)" >Cancelar</button>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadnome/cadnome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], CadnomePage);
    return CadnomePage;
}());

//# sourceMappingURL=cadnome.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadcepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadprocat_cadprocat__ = __webpack_require__(85);
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
 * Generated class for the CadcepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadcepPage = (function () {
    function CadcepPage(navCtrl, navParams, restProvider, sessionProvider, formBuilder, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'cad_cep', dataform: { jwt: this.sessionProvider.usuario.jwt, cep: '' } };
    }
    CadcepPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadcepPage');
    };
    CadcepPage.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.vj.dataform.cep = '';
        this.value_tipo_cadastro = this.navParams.get('cadastro_user');
        if (this.value_tipo_cadastro == 1)
            console.log('cadastro de usuario');
        else
            console.log('cadastro de artista');
    };
    CadcepPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            cep: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(9),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(9),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    CadcepPage.prototype.processCadastrarLogin = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        this.vj.dataform.jwt = this.sessionProvider.usuario.jwt;
        var myData = JSON.stringify(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            if (result.cad_cep != false) {
                _this.sessionProvider.saveNewJwt(result.cad_cep);
                if (_this.value_tipo_cadastro == 1)
                    _this.navCtrl.push('UserMainPage', {}, { animate: true, direction: 'back' });
                else
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cadprocat_cadprocat__["a" /* CadprocatPage */], { cadastro_user: _this.value_tipo_cadastro });
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    CadcepPage.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */]);
                break;
        }
    };
    CadcepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadcep',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadcep/cadcep.html"*/'<!--\n  Generated template for the CadcepPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Cadastro - Cep</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="processCadastrarLogin()" [formGroup]="credentialsForm">\n      \n      <ion-item>\n        <ion-label color="primary" floating>CEP</ion-label>\n        <ion-input type="text" formControlName = "cep" [(ngModel)]="vj.dataform.cep"  maxlength="9" [brmasker]="{mask:\'00000-000\', len:9}"></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.cep.valid  && (credentialsForm.controls.cep.dirty || submitAttempt) && !credentialsForm.controls.cep.pending">\n          <p *ngIf="credentialsForm.value.cep != \'\'">CEP inválido</p>\n          <p *ngIf="credentialsForm.value.cep == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n\n      <button ion-button type="submit" [disabled]="!credentialsForm.valid" block >Continuar</button>\n    \n    </form>\n  \n    <button ion-button (click)="openPage(0)" >Cancelar</button>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadcep/cadcep.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], CadcepPage);
    return CadcepPage;
}());

//# sourceMappingURL=cadcep.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadcepPageModule", function() { return CadcepPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadcep__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadcepPageModule = (function () {
    function CadcepPageModule() {
    }
    CadcepPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadcep__["a" /* CadcepPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadcep__["a" /* CadcepPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], CadcepPageModule);
    return CadcepPageModule;
}());

//# sourceMappingURL=cadcep.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CademailPageModule", function() { return CademailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cademail__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CademailPageModule = (function () {
    function CademailPageModule() {
    }
    CademailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cademail__["a" /* CademailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cademail__["a" /* CademailPage */]),
            ],
        })
    ], CademailPageModule);
    return CademailPageModule;
}());

//# sourceMappingURL=cademail.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadnomePageModule", function() { return CadnomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadnome__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadnomePageModule = (function () {
    function CadnomePageModule() {
    }
    CadnomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadnome__["a" /* CadnomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadnome__["a" /* CadnomePage */]),
            ],
        })
    ], CadnomePageModule);
    return CadnomePageModule;
}());

//# sourceMappingURL=cadnome.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadprocatPageModule", function() { return CadprocatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadprocat__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadprocatPageModule = (function () {
    function CadprocatPageModule() {
    }
    CadprocatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadprocat__["a" /* CadprocatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadprocat__["a" /* CadprocatPage */]),
            ],
        })
    ], CadprocatPageModule);
    return CadprocatPageModule;
}());

//# sourceMappingURL=cadprocat.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadvalcelPageModule", function() { return CadvalcelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadvalcel__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadvalcelPageModule = (function () {
    function CadvalcelPageModule() {
    }
    CadvalcelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadvalcel__["a" /* CadvalcelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadvalcel__["a" /* CadvalcelPage */]),
            ],
        })
    ], CadvalcelPageModule);
    return CadvalcelPageModule;
}());

//# sourceMappingURL=cadvalcel.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecisagrandeareaPageModule", function() { return PrecisagrandeareaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__precisagrandearea__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrecisagrandeareaPageModule = (function () {
    function PrecisagrandeareaPageModule() {
    }
    PrecisagrandeareaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__precisagrandearea__["a" /* PrecisagrandeareaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__precisagrandearea__["a" /* PrecisagrandeareaPage */]),
            ],
        })
    ], PrecisagrandeareaPageModule);
    return PrecisagrandeareaPageModule;
}());

//# sourceMappingURL=precisagrandearea.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrecisasubareaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadcel_cadcel__ = __webpack_require__(172);
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
 * Generated class for the PrecisasubareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrecisasubareaPage = (function () {
    // public form = [
    //   { val: 'Pepperoni', isChecked: true },
    //   { val: 'Sausage', isChecked: false },
    //   { val: 'Mushroom', isChecked: false }
    // ];
    function PrecisasubareaPage(navCtrl, navParams, restProvider, sessionProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.functionsProvider = functionsProvider;
        // Variavel para receber a resposta do servidor
        this.resposta = {};
        this.form = new Array();
    }
    PrecisasubareaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrecisasubareaPage');
    };
    PrecisasubareaPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter PrecisasubareaPage');
        this.id_grande_area = this.navParams.get('id_grande_area');
        this.grande_area = this.navParams.get('grande_area');
        this.getOpcoesSubArea(this.id_grande_area);
    };
    PrecisasubareaPage.prototype.getOpcoesSubArea = function (area) {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var req = { tipo: 'get_sub_areas', dataform: { grandearea: area } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            _this.resposta = result;
            if (_this.resposta.get_sub_areas == true) {
                _this.form = _this.resposta.sub_areas;
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    PrecisasubareaPage.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cadcel_cadcel__["a" /* CadcelPage */], { cadastro_user: 1 });
                break;
        }
    };
    PrecisasubareaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-precisasubarea',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/precisasubarea/precisasubarea.html"*/'<!--\n  Generated template for the PrecisasubareaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n          <span text-color="title_color">{{this.grande_area}}</span>\n        </ion-title>\n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item *ngFor="let entry of form">\n        <ion-label>{{entry.sub_area}}</ion-label>\n        <ion-checkbox slot="end" color="dark" [(ngModel)]="entry.isChecked"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button (click)="openPage(0)" >Continuar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/precisasubarea/precisasubarea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], PrecisasubareaPage);
    return PrecisasubareaPage;
}());

//# sourceMappingURL=precisasubarea.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecisasubareaPageModule", function() { return PrecisasubareaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__precisasubarea__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrecisasubareaPageModule = (function () {
    function PrecisasubareaPageModule() {
    }
    PrecisasubareaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__precisasubarea__["a" /* PrecisasubareaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__precisasubarea__["a" /* PrecisasubareaPage */]),
            ],
        })
    ], PrecisasubareaPageModule);
    return PrecisasubareaPageModule;
}());

//# sourceMappingURL=precisasubarea.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcomprarPageModule", function() { return ProcomprarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procomprar__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProcomprarPageModule = (function () {
    function ProcomprarPageModule() {
    }
    ProcomprarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__procomprar__["a" /* ProcomprarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__procomprar__["a" /* ProcomprarPage */]),
            ],
        })
    ], ProcomprarPageModule);
    return ProcomprarPageModule;
}());

//# sourceMappingURL=procomprar.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdisponiveisPageModule", function() { return ProdisponiveisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prodisponiveis__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdisponiveisPageModule = (function () {
    function ProdisponiveisPageModule() {
    }
    ProdisponiveisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prodisponiveis__["a" /* ProdisponiveisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prodisponiveis__["a" /* ProdisponiveisPage */]),
            ],
        })
    ], ProdisponiveisPageModule);
    return ProdisponiveisPageModule;
}());

//# sourceMappingURL=prodisponiveis.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProperfilPageModule", function() { return ProperfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properfil__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProperfilPageModule = (function () {
    function ProperfilPageModule() {
    }
    ProperfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__properfil__["a" /* ProperfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__properfil__["a" /* ProperfilPage */]),
            ],
        })
    ], ProperfilPageModule);
    return ProperfilPageModule;
}());

//# sourceMappingURL=properfil.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtabsPageModule", function() { return ProtabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protabs__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProtabsPageModule = (function () {
    function ProtabsPageModule() {
    }
    ProtabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__protabs__["a" /* ProtabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__protabs__["a" /* ProtabsPage */]),
            ],
        })
    ], ProtabsPageModule);
    return ProtabsPageModule;
}());

//# sourceMappingURL=protabs.module.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__protabs_protabs__ = __webpack_require__(84);
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
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, viewCtrl, modalCtrl, sessionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.sessionProvider = sessionProvider;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.ionViewDidEnter = function () {
        // is the same but called just after the page is shown,
        //  maybe multiple times if the page goes in background 
        //  and returns, for instance you could show an alert just
        //  when the page become in front
        var _this = this;
        console.log('ionViewDidEnter MainPage');
        this.sessionProvider.readUser().then(function (res) {
            console.log('ionViewDidEnter MainPage atribui valor:', _this.sessionProvider.usuario.jwt);
            if (_this.sessionProvider.checkLogin())
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__protabs_protabs__["a" /* ProtabsPage */]);
        });
    };
    MainPage.prototype.ambienteArtistaTab = function () {
        this.navCtrl.push('CadcelPage', { cadastro_user: 0 });
    };
    MainPage.prototype.modalModalTab = function () {
        var modal = this.modalCtrl.create('OperationPage');
        modal.present();
    };
    MainPage.prototype.ambienteUserTab = function () {
        this.navCtrl.push('PrecisagrandeareaPage', {}, { animate: true, direction: 'back' });
        //this.navCtrl.push('UserMainPage', {}, {animate: true, direction: 'back'});
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton >\n    <ion-title>\n      <span text-color="title_color">GetBeauty</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: rgb(21, 21, 25);">\n \n\n<button class=\'mainbutton1\' ion-button full (click)="ambienteArtistaTab()">Cadastre suas artes</button>\n<button class=\'mainbutton2\' ion-button full (click)="modalModalTab()">Conheça mais...</button>\n<button class=\'mainbutton3\' ion-button full (click)="ambienteUserTab()">Procure um artista</button>\n</ion-content>\n\n<ion-footer>\n\n  <ion-navbar hideBackButton>\n    <ion-title></ion-title>\n    <ion-title>\n        <span text-color="title_color">app da Beleza</span>\n      </ion-title>\n  </ion-navbar>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_brmasker_ionic_3__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastro1_cadastro1_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastro2_cadastro2_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_main_main_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cadprocat_cadprocat_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_protabs_protabs_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_prodisponiveis_prodisponiveis_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_properfil_properfil_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_procomprar_procomprar_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cadcel_cadcel_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cadcep_cadcep_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cademail_cademail_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cadnome_cadnome_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cadvalcel_cadvalcel_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_precisagrandearea_precisagrandearea_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_precisasubarea_precisasubarea_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro2/cadastro2.module#Cadastro2PageModule', name: 'Cadastro2Page', segment: 'cadastro2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro1/cadastro1.module#Cadastro1PageModule', name: 'Cadastro1Page', segment: 'cadastro1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadcel/cadcel.module#CadcelPageModule', name: 'CadcelPage', segment: 'cadcel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadcep/cadcep.module#CadcepPageModule', name: 'CadcepPage', segment: 'cadcep', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cademail/cademail.module#CademailPageModule', name: 'CademailPage', segment: 'cademail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadnome/cadnome.module#CadnomePageModule', name: 'CadnomePage', segment: 'cadnome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadprocat/cadprocat.module#CadprocatPageModule', name: 'CadprocatPage', segment: 'cadprocat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadvalcel/cadvalcel.module#CadvalcelPageModule', name: 'CadvalcelPage', segment: 'cadvalcel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operation/operation.module#OperationPageModule', name: 'OperationPage', segment: 'operation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/precisagrandearea/precisagrandearea.module#PrecisagrandeareaPageModule', name: 'PrecisagrandeareaPage', segment: 'precisagrandearea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/precisasubarea/precisasubarea.module#PrecisasubareaPageModule', name: 'PrecisasubareaPage', segment: 'precisasubarea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/procomprar/procomprar.module#ProcomprarPageModule', name: 'ProcomprarPage', segment: 'procomprar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prodisponiveis/prodisponiveis.module#ProdisponiveisPageModule', name: 'ProdisponiveisPage', segment: 'prodisponiveis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/properfil/properfil.module#ProperfilPageModule', name: 'ProperfilPage', segment: 'properfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-dados/user-dados.module#UserDadosPageModule', name: 'UserDadosPage', segment: 'user-dados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/protabs/protabs.module#ProtabsPageModule', name: 'ProtabsPage', segment: 'protabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-historico/user-historico.module#UserHistoricoPageModule', name: 'UserHistoricoPage', segment: 'user-historico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-main/user-main.module#UserMainPageModule', name: 'UserMainPage', segment: 'user-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-procurar/user-procurar.module#UserProcurarPageModule', name: 'UserProcurarPage', segment: 'user-procurar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_7_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_main_main_module__["MainPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro1_cadastro1_module__["Cadastro1PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro2_cadastro2_module__["Cadastro2PageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_cadprocat_cadprocat_module__["CadprocatPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_protabs_protabs_module__["ProtabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_prodisponiveis_prodisponiveis_module__["ProdisponiveisPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_procomprar_procomprar_module__["ProcomprarPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_properfil_properfil_module__["ProperfilPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_cadcel_cadcel_module__["CadcelPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_cadvalcel_cadvalcel_module__["CadvalcelPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_cadcep_cadcep_module__["CadcepPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_cademail_cademail_module__["CademailPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_cadnome_cadnome_module__["CadnomePageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_precisagrandearea_precisagrandearea_module__["PrecisagrandeareaPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_precisasubarea_precisasubarea_module__["PrecisasubareaPageModule"],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_session_session__["a" /* SessionProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_functions_functions__["a" /* FunctionsProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cadastro1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro2_cadastro2__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Cadastro2Page } from '../cadastro2/cadastro2';
// import { Cadastro3Page } from '../cadastro3/cadastro3';
// import { TabsPage } from '../tabs/tabs';
// import { LoginPage } from '../login/login';



/**
 * Generated class for the Cadastro1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Cadastro1Page = (function () {
    function Cadastro1Page(navCtrl, navParams, restProvider, sessionProvider, formBuilder, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'cadastro1', dataform: { celular: '', email: '', nome: '', cep: '' } };
        // vjs = { tipo: 'cadastro1', dataform: { celular: '', email: '', p: '' } };
        // Variavel para receber a resposta do servidor
        this.resposta = {};
        // variavel para a senha em hash
        // CryptoJS = require('crypto-js');
        // emailREGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailREGEXP = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/;
        // PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        this.nomeREGEXP = /^([a-zA-ZÁÉÍÓÚÂÊÎÔÛÃÕÇáéíóúâêîôûãõç.'-]+\s+){1,6}[a-zA-zÁÉÍÓÚÂÊÎÔÛÃÕÇáéíóúâêîôûãõç.'-]+$/;
    }
    Cadastro1Page.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            celular: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(15),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
            nome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(this.nomeREGEXP),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(200),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(this.emailREGEXP),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(60),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
            cep: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(9),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(9),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
        });
    };
    // ionViewCanEnter() {
    //   return false;
    // }
    //Our custom validation
    // public valida_senhas_iguais(control: AbstractControl): {[key: string]: any;}  {
    //   //  var val: string = control.value;
    //    return ( this.vj.dataform.senha != this.vj.dataform.senha2 ) ?
    //    { 'senhas_iguais': false } :
    //        null;
    // };
    Cadastro1Page.prototype.ionViewWillEnter = function () {
        // is called just before the page is shown, maybe multiple
        //  times if the page goes in background and returns, here
        //  you could refresh data if it can be changed in another
        //  page
        this.vj.dataform.celular = '';
        this.vj.dataform.email = '';
        this.vj.dataform.nome = '';
        this.vj.dataform.cep = '';
        // this.vj.dataform.senha  = '';
        // this.vj.dataform.senha2 = '';
        this.resposta = '';
    };
    Cadastro1Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Cadastro1Page');
    };
    Cadastro1Page.prototype.processCadastrarLogin = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var myData = JSON.stringify(this.vj);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            _this.resposta = result;
            if (_this.resposta.cadastro1 != false) {
                // console.log( "resposta informou cadastro1 ok");
                _this.sessionProvider.activeUser(_this.vj.dataform.celular, _this.resposta.jwt, _this.resposta.status);
                _this.GeraCodigoEnviaSMS();
            }
            else {
                switch (_this.resposta.status) {
                    case 1:
                        _this.sessionProvider.activeUser(_this.vj.dataform.celular, _this.resposta.jwt, _this.resposta.status);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cadastro2_cadastro2__["a" /* Cadastro2Page */]);
                        break;
                    // case 2:
                    //   this.sessionProvider.activeUser( this.vjs.dataform.email, this.resposta.jwt, this.resposta.pais_user, this.resposta.status );
                    //   this.navCtrl.push(Cadastro3Page);
                    //   break;
                    // case 3:
                    // case 4:
                    //   this.sessionProvider.activeUser( this.vjs.dataform.email, this.resposta.jwt, this.resposta.pais_user, this.resposta.status );
                    //   this.navCtrl.push(TabsPage);
                    //   break;
                    default:
                        // this.vj.dataform.senha  = '';
                        // this.vj.dataform.senha2 = '';
                        _this.resposta = '';
                        _this.functionsProvider.ShowAlert('Este email já foi cadastrado', 3000, true);
                        break;
                }
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    Cadastro1Page.prototype.GeraCodigoEnviaSMS = function () {
        var _this = this;
        var req = { tipo: 'gera_codigo_envia_sms', dataform: { jwt: this.sessionProvider.usuario.jwt } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.resposta = result;
            console.log('resposta gera_codigo_envia_sms', _this.resposta);
            if (_this.resposta.gera_codigo_envia_sms != false) {
                _this.sessionProvider.saveNewJwt(_this.resposta.gera_codigo_envia_sms);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cadastro2_cadastro2__["a" /* Cadastro2Page */]);
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Cadastro1Page.prototype.openPage = function (page) {
        switch (page) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
                break;
        }
    };
    Cadastro1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastro1',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadastro1/cadastro1.html"*/'<!--\n  Generated template for the Cadastro1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>\n      <span text-color="title_color">Cadastro - Login</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n  \n  <ion-content padding>\n    <form (ngSubmit)="processCadastrarLogin()" [formGroup]="credentialsForm">\n      \n      <ion-item>\n        <ion-label color="primary" floating>Nome completo</ion-label>\n        <ion-input type="text" formControlName = "nome" [(ngModel)]="vj.dataform.nome"  maxlength="200" ></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.nome.valid  && (credentialsForm.controls.nome.dirty || submitAttempt) && !credentialsForm.controls.nome.pending">\n          <p *ngIf="credentialsForm.value.nome != \'\'">Nome inválido</p>\n          <p *ngIf="credentialsForm.value.nome == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>Celular</ion-label>\n        <ion-input type="text" formControlName = "celular" [(ngModel)]="vj.dataform.celular"  [brmasker]="{phone: true}" ></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.celular.valid  && (credentialsForm.controls.celular.dirty || submitAttempt) && !credentialsForm.controls.celular.pending">\n          <p *ngIf="credentialsForm.value.celular != \'\'">Celular inválido</p>\n          <p *ngIf="credentialsForm.value.celular == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" formControlName = "email" [(ngModel)]="vj.dataform.email"  maxlength="60" ></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.email.valid  && (credentialsForm.controls.email.dirty || submitAttempt) && !credentialsForm.controls.email.pending">\n          <p *ngIf="credentialsForm.value.email != \'\'">Email inválido</p>\n          <p *ngIf="credentialsForm.value.email == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n      <!-- <ion-item class="no-line error" *ngIf="erro_cadastro1 != \'\'"> \n          <p>{{ erro_cadastro1 }}</p>\n      </ion-item> -->\n<!--   \n      <ion-item>\n        <ion-label>Senha</ion-label>\n        <ion-input type="password" formControlName="senha" [(ngModel)]="vj.dataform.senha"  maxlength="16" ></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.senha.valid  && (credentialsForm.controls.senha.dirty || submitAttempt) && !credentialsForm.controls.senha.pending">\n          <p *ngIf="credentialsForm.value.senha != \'\'">Deve conter no mínimo 6 e no máximo 16 caracteres</p>\n          <p *ngIf="credentialsForm.value.senha == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>Confirme a senha</ion-label>\n        <ion-input type="password" formControlName="senha2" [(ngModel)]="vj.dataform.senha2"  maxlength="16" ></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="credentialsForm.value.senha != credentialsForm.value.senha2 && credentialsForm.value.senha2 != \'\' && (credentialsForm.controls.senha2.dirty  || submitRegisterAttempt) && !credentialsForm.controls.senha2.pending && credentialsForm.value.senha != \'\' && credentialsForm.controls.senha.valid">\n          <p>Confirmação de senha inválida</p>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="credentialsForm.value.senha2 == \'\' && (credentialsForm.controls.senha2.dirty  || submitRegisterAttempt) && !credentialsForm.controls.senha2.pending && credentialsForm.value.senha != \'\' && credentialsForm.controls.senha.valid">\n          <p>Preenchimento obrigatório</p>\n      </ion-item> -->\n  \n      <ion-item>\n        <ion-label color="primary" floating>CEP</ion-label>\n        <ion-input type="text" formControlName = "cep" [(ngModel)]="vj.dataform.cep"  maxlength="9" [brmasker]="{mask:\'00000-000\', len:9}"></ion-input>\n      </ion-item>\n      <ion-item class="no-line error" *ngIf="!credentialsForm.controls.cep.valid  && (credentialsForm.controls.cep.dirty || submitAttempt) && !credentialsForm.controls.cep.pending">\n          <p *ngIf="credentialsForm.value.cep != \'\'">CEP inválido</p>\n          <p *ngIf="credentialsForm.value.cep == \'\'">Preenchimento obrigatório</p>\n      </ion-item>\n\n      <button ion-button type="submit" [disabled]="!credentialsForm.valid" block >Continuar</button>\n    \n    </form>\n  \n    <button ion-button (click)="openPage(0)" >Cancelar</button>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadastro1/cadastro1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], Cadastro1Page);
    return Cadastro1Page;
}());

//# sourceMappingURL=cadastro1.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrecisagrandeareaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__precisasubarea_precisasubarea__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__ = __webpack_require__(16);
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
 * Generated class for the PrecisagrandeareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrecisagrandeareaPage = (function () {
    function PrecisagrandeareaPage(navCtrl, navParams, restProvider, 
        // public sessionProvider: SessionProvider,
        functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.functionsProvider = functionsProvider;
        // Variavel para receber a resposta do servidor
        this.resposta = {};
        this.form = new Array();
    }
    PrecisagrandeareaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrecisagrandeareaPage');
    };
    PrecisagrandeareaPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter PrecisagrandeareaPage');
        this.getOpcoesGrandeArea();
    };
    PrecisagrandeareaPage.prototype.getOpcoesGrandeArea = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var req = { tipo: 'get_grandes_areas' };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            _this.resposta = result;
            if (_this.resposta.get_grandes_areas == true) {
                console.log(_this.resposta.grandes_areas);
                _this.form = _this.resposta.grandes_areas;
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    PrecisagrandeareaPage.prototype.openPage = function (page, nome) {
        console.log(page);
        console.log(nome);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__precisasubarea_precisasubarea__["a" /* PrecisasubareaPage */], { id_grande_area: page, grande_area: nome });
    };
    PrecisagrandeareaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-precisagrandearea',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/precisagrandearea/precisagrandearea.html"*/'<!--\n  Generated template for the PrecisagrandeareaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Buscando Artista</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Que tipo de artista você está precisando?\n  \n  <ion-card *ngFor="let ga of form" >\n    <img src={{ga.img_grande_area}} (click)="openPage( ga.id, ga.grande_area )">\n  </ion-card>\n  <!-- <ion-card>\n    <img src=\'../../assets/imgs/babearia.jpg\' (click)="openPage(2, \'babearia\')">\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/manicure.jpeg\' (click)="openPage(3, \'manicure\')">\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/pedicure.jpeg\' (click)="openPage(4, \'pedicure\')">\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/estetica_facial.jpeg\' (click)="openPage(5, \'estetica_facial\')">\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/estetica_corporal.jpeg\' (click)="openPage(6, \'estetica_corporal\')">\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/depilacao.jpeg\' >\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/massagem.jpeg\' >\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/sobrancelhas.jpeg\' >\n  </ion-card>\n  <ion-card>\n    <img src=\'../../assets/imgs/cirurgia_plastica.jpeg\' >\n  </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/precisagrandearea/precisagrandearea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], PrecisagrandeareaPage);
    return PrecisagrandeareaPage;
}());

//# sourceMappingURL=precisagrandearea.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcomprarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main__ = __webpack_require__(20);
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
 * Generated class for the ProcomprarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcomprarPage = (function () {
    function ProcomprarPage(navCtrl, navParams, restProvider, sessionProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.functionsProvider = functionsProvider;
        // Variavel para receber a resposta do servidor
        this.resposta = {};
    }
    ProcomprarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcomprarPage');
    };
    ProcomprarPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ProcomprarPage');
        this.getOpcoesPctDiamantes();
    };
    ProcomprarPage.prototype.getOpcoesPctDiamantes = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var req = { tipo: 'get_pct_diamantes', dataform: { jwt: this.sessionProvider.usuario.jwt } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            _this.resposta = result;
            if (_this.resposta.get_pct_diamantes != true) {
                _this.sessionProvider.saveNewJwt(_this.resposta.get_pct_diamantes);
                _this.lista_pct_diamantes = _this.resposta.pct_diamantes;
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    ProcomprarPage.prototype.processComprarPctDiamantes = function (id) {
        console.log('ID pct: ', id);
    };
    ProcomprarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-procomprar',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/procomprar/procomprar.html"*/'<!--\n  Generated template for the ProcomprarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Diamantes</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Escolha uma das opções abaixo:\n  \n  <ion-card *ngFor="let pct of lista_pct_diamantes" (click)="processComprarPctDiamantes(pct.id);">\n    <ion-card-header>\n      <ion-card-title>{{ pct.diamantes }} Diamantes</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n        R$ {{ pct.valor }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/procomprar/procomprar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], ProcomprarPage);
    return ProcomprarPage;
}());

//# sourceMappingURL=procomprar.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdisponiveisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(45);
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
 * Generated class for the ProdisponiveisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdisponiveisPage = (function () {
    function ProdisponiveisPage(navCtrl, navParams, viewCtrl, modalCtrl, sessionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.sessionProvider = sessionProvider;
        this.viewCtrl = this.navParams.get('viewCtrl');
    }
    ProdisponiveisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdisponiveisPage');
    };
    ProdisponiveisPage.prototype.ionViewCanEnter = function () {
        return (this.sessionProvider.checkLogin());
    };
    ProdisponiveisPage.prototype.dismissPushTab = function () {
        this.viewCtrl.dismiss();
    };
    ProdisponiveisPage.prototype.modalModalTab = function () {
        var modal = this.modalCtrl.create('ModalTabsPage');
        modal.present();
    };
    ProdisponiveisPage.prototype.SairAmbienteArtista = function () {
        this.sessionProvider.LogOffUser();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
    };
    ProdisponiveisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prodisponiveis',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/prodisponiveis/prodisponiveis.html"*/'<!--\n  Generated template for the ProdisponiveisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Pedidos Disponíveis</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button full (click)="SairAmbienteArtista()">Sair</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/prodisponiveis/prodisponiveis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_session_session__["a" /* SessionProvider */]])
    ], ProdisponiveisPage);
    return ProdisponiveisPage;
}());

//# sourceMappingURL=prodisponiveis.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProperfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ProperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProperfilPage = (function () {
    function ProperfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProperfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProperfilPage');
    };
    ProperfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-properfil',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/properfil/properfil.html"*/'<!--\n  Generated template for the ProperfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span text-color="title_color">Perfil</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/properfil/properfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProperfilPage);
    return ProperfilPage;
}());

//# sourceMappingURL=properfil.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'MainPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtabsPage; });
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
 * Generated class for the ProtabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProtabsPage = (function () {
    function ProtabsPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.linkOnePro = 'ProdisponiveisPage';
        this.linkTwoPro = 'ProcomprarPage';
        this.linkThreePro = 'ProperfilPage';
        this.data = {
            viewCtrl: this.viewCtrl
        };
    }
    ProtabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-protabs',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/protabs/protabs.html"*/'<ion-tabs>\n    <ion-tab [tabsHideOnSubPages]="true" [root]="linkOnePro" [rootParams]="data" tabTitle="Disponíveis" tabIcon="information-circle"></ion-tab>\n    <ion-tab [tabsHideOnSubPages]="true" [root]="linkTwoPro" [rootParams]="data" tabTitle="Comprar" tabIcon="cart"></ion-tab>\n    <ion-tab [tabsHideOnSubPages]="true" [root]="linkThreePro" [rootParams]="data" tabTitle="Perfil" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/protabs/protabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], ProtabsPage);
    return ProtabsPage;
}());

//# sourceMappingURL=protabs.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadprocatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__protabs_protabs__ = __webpack_require__(84);
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
 * Generated class for the CadprocatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadprocatPage = (function () {
    function CadprocatPage(navCtrl, navParams, restProvider, sessionProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.sessionProvider = sessionProvider;
        this.functionsProvider = functionsProvider;
        // Variavel para passar parametros para o servidor
        this.vj = { tipo: 'valida_celular', dataform: { jwt: '', codigo_sms: '' } };
        // Variavel para receber a resposta do servidor
        this.resposta = {};
    }
    CadprocatPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter CadprocatPage');
        this.getOpcoesCategoria1();
    };
    CadprocatPage.prototype.getOpcoesCategoria1 = function () {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var req = { tipo: 'get_categorias_1', dataform: { jwt: this.sessionProvider.usuario.jwt } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            _this.resposta = result;
            if (_this.resposta.get_categorias_1 != true) {
                _this.sessionProvider.saveNewJwt(_this.resposta.get_categorias_1);
                _this.lista_categorias = _this.resposta.categorias;
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    CadprocatPage.prototype.processCadastraAnuncioBasico = function (id_categoria) {
        var _this = this;
        this.functionsProvider.ShowLoading();
        var req = { tipo: 'cad_anuncio_basico', dataform: { jwt: this.sessionProvider.usuario.jwt, id_categoria_1: id_categoria } };
        var myData = JSON.stringify(req);
        this.restProvider.RequestAPIServer(myData).then(function (result) {
            _this.functionsProvider.DismmissLoading();
            _this.resposta = result;
            if (_this.resposta.cad_anuncio_basico != true) {
                _this.sessionProvider.saveNewJwt(_this.resposta.cad_anuncio_basico);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__protabs_protabs__["a" /* ProtabsPage */]);
            }
            else {
                _this.sessionProvider.LogOffUser();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_main__["a" /* MainPage */]);
            }
        }, function (err) {
            _this.functionsProvider.DismmissLoading();
            console.log(err);
        });
    };
    CadprocatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadprocat',template:/*ion-inline-start:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadprocat/cadprocat.html"*/'<!--\n  Generated template for the CadprocatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton >\n    <ion-title>\n        <span text-color="title_color">Área de Atuaçào</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let categoria of lista_categorias" (click)="processCadastraAnuncioBasico(categoria.id_categoria_1);">\n      \n    <!--<button ion-item > -->\n      <ion-card-header>\n        <ion-card-title>{{ categoria.nome }}</ion-card-title>\n      </ion-card-header>\n    \n      <!-- <ion-card-content>\n          {{ categoria.descricao }}\n      </ion-card-content> -->\n    <!--</button>-->\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nicolas/Projetos/ionic/getbeauty/src/pages/cadprocat/cadprocat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], CadprocatPage);
    return CadprocatPage;
}());

//# sourceMappingURL=cadprocat.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map