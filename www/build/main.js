webpackJsonp([4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CruzasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CruzasService = (function () {
    function CruzasService(afDB) {
        this.afDB = afDB;
        this.cruzas = [];
    }
    CruzasService.prototype.getCruzas = function () {
        return this.afDB.list("cruzas/");
        //return this.notes
    };
    ;
    CruzasService.prototype.getCruza = function (id) {
        //return this.notes.filter( function (e, i) { return e.id == id}) [0]|| {
        //    id: null, cama: null, nombre: null, edad: null, registro: null, dx: null,
        //procedimiento: null, fechacx: null, material: null, cruce: null, consentimiento: null,
        //craneotomo: null, ekg: null, labs: null, rxtorax: null, valanest: null,
        //ayuno: null, labsexp: null, suspanticoag: null, observaciones: null,
        //elaborado: null, modificaciones:[{num: null,fecha:null}]
        return this.afDB.object("cruzas/" + id);
    };
    ;
    CruzasService.prototype.crearcruza = function (cruza) {
        this.afDB.database.ref("cruzas/" + cruza.id).set(cruza);
        //this.notes.push(note);
    };
    ;
    CruzasService.prototype.editarcruza = function (cruza) {
        // for (let i ; i< this.notes.length; i++){
        // if (this.notes[i] == note){
        //    this.notes[i] = note } }
        this.afDB.database.ref("cruzas/" + cruza.id).set(cruza);
    };
    CruzasService.prototype.borrarcruza = function (cruza) {
        //for (let i = 0 ; i< this.notes.length; i++){
        //  if (this.notes[i] == note){
        //    this.notes.splice(i,1);}}
        this.afDB.database.ref("cruzas/" + cruza.id).remove();
    };
    CruzasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CruzasService);
    return CruzasService;
}());

//# sourceMappingURL=cruzas.service.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notes_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(324);
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, notesService, toastCtrl, alertCtrl, actionSheetCtrl, platform, camera, afStorage, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.notesService = notesService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.camera = camera;
        this.afStorage = afStorage;
        this.iab = iab;
        this.note = {
            id: null,
            anillo: null,
            nombre: null,
            palomar: null,
            color: null,
            padre: null,
            madre: null,
            vuelos: null,
            premios: null,
            observaciones: null,
            modificado: null
        };
        this.id = null;
        this.show = true;
        this.cargado = false;
        this.cargadoekg = false;
        this.cargadorx = false;
        this.preview = false;
        this.previewekg = false;
        this.previewrx = false;
        this.someTextUrl = '';
        this.someTextUrlekg = '';
        this.someTextUrlrx = '';
        this.iaboptions = {
            location: 'no',
            zoom: 'yes'
        };
        this.id = navParams.get('id');
        if (this.id != 0) {
            notesService.getNote(this.id)
                .valueChanges().subscribe(function (note) {
                _this.note = note;
            });
            this.cargado = true;
            this.cargadoekg = true;
            this.cargadorx = true;
        }
        ;
        this.getSomeText();
    }
    ModalPage.prototype.getSomeText = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('pacientes/' + this.id + '/').child('tac').getDownloadURL()
            .then(function (response) {
            _this.someTextUrl = response;
            _this.preview = true;
        })
            .catch(function (error) { return console.log('error', error); });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('pacientes/' + this.id + '/').child('ekg').getDownloadURL()
            .then(function (response) {
            _this.someTextUrlekg = response;
            _this.previewekg = true;
        })
            .catch(function (error) { return console.log('error', error); });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('pacientes/' + this.id + '/').child('rx').getDownloadURL()
            .then(function (response) {
            _this.someTextUrlrx = response;
            _this.previewrx = true;
        })
            .catch(function (error) { return console.log('error', error); });
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.capturartac = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictures = _this.afStorage.storage.ref('pacientes/' + _this.id + '/tac/');
            pictures.putString(base64Image, 'data_url');
            var toast = _this.toastCtrl.create({
                message: 'Pigeon guardado',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }, function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.capturarekg = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictures = _this.afStorage.storage.ref('pacientes/' + _this.id + '/ekg/');
            pictures.putString(base64Image, 'data_url');
            var toast = _this.toastCtrl.create({
                message: 'Foto Guardada',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }, function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.capturarrx = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictures = _this.afStorage.storage.ref('pacientes/' + _this.id + '/rx/');
            pictures.putString(base64Image, 'data_url');
            var toast = _this.toastCtrl.create({
                message: 'Foto guardada',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }, function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.descargartac = function () {
        var target = "_self";
        this.iab.create(this.someTextUrl, target, this.iaboptions);
    };
    ModalPage.prototype.descargarekg = function () {
        var target = "_self";
        this.iab.create(this.someTextUrlekg, target, this.iaboptions);
    };
    ModalPage.prototype.descargarrx = function () {
        var target = "_self";
        this.iab.create(this.someTextUrlrx, target, this.iaboptions);
    };
    ModalPage.prototype.opcionespac = function () {
        var _this = this;
        if (this.id != 0) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.notesService.editarpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Entrada modificada',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            else {
                                _this.note.id = Date.now();
                                _this.notesService.crearpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Pigeon agregado',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Borrar Pigeon',
                        role: 'destructive',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            console.log('Delete clicked');
                            var alert = _this.alertCtrl.create({
                                title: 'Atención',
                                subTitle: 'Se borrará el Pigeon de manera permanente',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        handler: function () {
                                            _this.show = false;
                                            _this.notesService.borrarpac(_this.note);
                                            _this.viewCtrl.dismiss();
                                            var toast = _this.toastCtrl.create({
                                                message: 'Pigeon borrado',
                                                duration: 2000,
                                                position: 'top'
                                            });
                                            toast.present();
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        handler: function () {
                                            _this.viewCtrl.dismiss();
                                        }
                                    },
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.notesService.editarpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Pigeon modificado',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            else {
                                _this.note.id = Date.now();
                                _this.notesService.crearpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Pigeon agregado',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Pigeon</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="show">\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Anillo</ion-label>\n            <ion-input type="text" [(ngModel)]="note.anillo"  ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Nombre</ion-label>\n            <ion-input type="text" [(ngModel)]="note.nombre" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Palomar</ion-label>\n            <ion-input type="text" [(ngModel)]="note.palomar"></ion-input>\n        </ion-item>\n\n        \n        <ion-item>\n            <ion-label floating>Color</ion-label>\n            <ion-input type="text" [(ngModel)]="note.color"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Padre</ion-label>\n            <ion-input type="text" [(ngModel)]="note.padre"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Madre</ion-label>\n            <ion-input type="text" [(ngModel)]="note.madre"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Número de vuelos</ion-label>\n            <ion-input type="text" [(ngModel)]="note.vuelos"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Número de premios</ion-label>\n            <ion-input type="text" [(ngModel)]="note.premios"></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-label> LOGROS </ion-label>\n                \n        </ion-item>\n\n\n\n        <ion-item>\n        <button ion-button  (click)="capturartac()"  icon-left *ngIf="cargado"><ion-icon name="md-camera"  ></ion-icon> Capturar Ojo</button>\n        <br>\n        <button ion-button  (click)="descargartac()" icon-left *ngIf="preview" ><ion-icon name="md-eye"></ion-icon> Ver Detalles </button>\n  </ion-item>\n  <ion-item *ngIf="preview">\n      <label>Vista Previa:</label>\n      <br>\n        <img src= {{someTextUrl}} />\n    \n    </ion-item>\n    <ion-item>\n        <button ion-button  (click)="capturarrx()"  icon-left *ngIf="cargado"><ion-icon name="md-camera"  ></ion-icon> Capturar Pigeon</button>\n        <br>\n        <button ion-button  (click)="descargarrx()" icon-left *ngIf="preview" ><ion-icon name="md-eye"></ion-icon> Ver Detalles </button>\n  </ion-item>\n  <ion-item *ngIf="preview">\n      <label>Vista Previa:</label>\n      <br>\n        <img src= {{someTextUrlrx}} />\n    \n    </ion-item>\n    <ion-item>\n        <ion-label >Favorito</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="note.favorita"></ion-checkbox>\n    </ion-item>\n        \n        \n      <ion-item>\n          <ion-label stacked>Observaciones</ion-label>\n          <ion-textarea [(ngModel)]="note.observaciones" id="txtnotes" rows="12" ></ion-textarea>\n\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Modificado por:</ion-label>\n          <ion-input type="text" [(ngModel)]="note.elaborado"></ion-input>\n      </ion-item>\n      \n      </ion-list>\n      \n      \n      \n      <ion-row no-padding>\n          <ion-col text-right>\n              <button ion-button item-end (click)="opcionespac()" block  >Opciones</button>\n             \n          </ion-col>\n          \n      \n      </ion-row>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the Modal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Modal2Page = (function () {
    function Modal2Page(navCtrl, navParams, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.user = {};
    }
    Modal2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Modal2Page');
    };
    Modal2Page.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.toast.create({
                            message: "Algo falló al iniciar sesión, verifique sus datos e intente de nuevo.",
                            duration: 3000,
                            position: "middle"
                        }).present();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Modal2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal2',template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal2\modal2.html"*/'<!--\n  Generated template for the Modal2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Appigeon</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n             <h1>Iniciar sesión</h1>\n        </ion-list-header>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" [(ngModel)]="user.email"  ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="user.password" ></ion-input>\n        </ion-item>\n      </ion-list>\n\n        <ion-row no-padding>\n            <ion-col text-right>\n                <button ion-button item-end (click)="login(user)" block  >Entrar</button>\n               \n            </ion-col>\n          </ion-row>\n           \n       \n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal2\modal2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], Modal2Page);
    return Modal2Page;
}());

//# sourceMappingURL=modal2.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cruzas_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal4_modal4__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(328);
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
 * Generated class for the Modal3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Modal3Page = (function () {
    function Modal3Page(navCtrl, navParams, viewCtrl, cruzasService, toastCtrl, alertCtrl, actionSheetCtrl, platform, modalCtrl, calendar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.cruzasService = cruzasService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.calendar = calendar;
        this.cruzas = {
            id: null,
            idpaloma1: null,
            nombrepaloma1: null,
            anillopaloma1: null,
            idpaloma2: null,
            nombrepaloma2: null,
            anillopaloma2: null,
            fechacruza: null,
            fechatermino: null,
            aviso: null,
            observaciones: null,
            modificado: null
        };
        this.pigeona = {
            nombre: null,
            anillo: null,
            idpigeon: null
        };
        this.pigeonb = {
            nombre: null,
            anillo: null,
            idpigeon: null
        };
        this.id = null;
        this.show = true;
        this.eventoCal = {
            title: "Appigeon ",
            location: "",
            message: "Los pigeons nacen mañana! Ya tenemos todo listo?",
        };
        this.id = navParams.get('id');
        if (this.id != 0) {
            cruzasService.getCruza(this.id)
                .valueChanges().subscribe(function (cruzas) {
                _this.cruzas = cruzas;
            });
        }
        this.datetest = this.cruzas.fechatermino;
    }
    Modal3Page.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Modal3Page.prototype.selectpigeona = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal4_modal4__["a" /* Modal4Page */]);
        modal.onDidDismiss(function (notes) {
            console.log(notes);
            _this.cruzas.idpaloma1 = notes.id;
            _this.cruzas.nombrepaloma1 = notes.nombre;
            _this.cruzas.anillopaloma1 = notes.anillo;
        });
        modal.present();
    };
    Modal3Page.prototype.selectpigeonb = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal4_modal4__["a" /* Modal4Page */]);
        modal.onDidDismiss(function (notes) {
            console.log(notes);
            _this.cruzas.idpaloma2 = notes.id;
            _this.cruzas.nombrepaloma2 = notes.nombre;
            _this.cruzas.anillopaloma2 = notes.anillo;
        });
        modal.present();
    };
    Modal3Page.prototype.poneraviso = function () {
        var _this = this;
        if (this.cruzas.aviso == true) {
            this.calendar.createEvent(this.eventoCal.title, this.eventoCal.location, this.eventoCal.message, new Date(this.cruzas.fechatermino), new Date(this.cruzas.fechatermino)).then(function (msg) {
                var alert = _this.alertCtrl.create({
                    title: 'Aviso',
                    subTitle: 'Aviso colocado correctamente!',
                    buttons: ['Aceptar']
                });
                alert.present();
            }, function (err) {
                _this.cruzas.aviso = false;
                var alert = _this.alertCtrl.create({
                    title: 'Algo Falló',
                    subTitle: err,
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }
        ;
    };
    Modal3Page.prototype.opcionescruza = function () {
        var _this = this;
        if (this.id != 0) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.cruzasService.editarcruza(_this.cruzas);
                                var toast = _this.toastCtrl.create({
                                    message: 'Cruza modificada',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            else {
                                _this.cruzas.id = Date.now();
                                _this.cruzasService.crearcruza(_this.cruzas);
                                var toast = _this.toastCtrl.create({
                                    message: 'Cruza guardada',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Borrar Cruza',
                        role: 'destructive',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            console.log('Delete clicked');
                            var alert = _this.alertCtrl.create({
                                title: 'Atención',
                                subTitle: 'Se borrará la Cruza de manera permanente',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        handler: function () {
                                            _this.show = false;
                                            _this.cruzasService.borrarcruza(_this.cruzas);
                                            _this.viewCtrl.dismiss();
                                            var toast = _this.toastCtrl.create({
                                                message: 'Cruza borrada',
                                                duration: 2000,
                                                position: 'top'
                                            });
                                            toast.present();
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        handler: function () {
                                            _this.viewCtrl.dismiss();
                                        }
                                    },
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.cruzasService.editarcruza(_this.cruzas);
                                var toast = _this.toastCtrl.create({
                                    message: 'Cruza modificada',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            else {
                                _this.cruzas.id = Date.now();
                                _this.cruzasService.crearcruza(_this.cruzas);
                                var toast = _this.toastCtrl.create({
                                    message: 'Cruza agregada',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    Modal3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal3',template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal3\modal3.html"*/'<!--\n  Generated template for the Modal3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cruza</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  \n\n</ion-header>\n\n\n<ion-content padding *ngIf="show">\n  <ion-list>\n\n      <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/icon.png">\n          </ion-avatar>\n          <h1>Paloma 1</h1>\n          <h2>Anillo: </h2>\n          <h3>{{cruzas.anillopaloma1}} </h3>\n          <h4>Nombre: {{cruzas.nombrepaloma1}}</h4>\n          <button ion-button item-end color="primary" (click)= \'selectpigeona()\'>\n              \n              Buscar\n            </button>\n         \n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n              <img src="assets/imgs/icon.png">\n            </ion-avatar>\n            <h1>Paloma 2</h1>\n            <h2>Anillo: </h2>\n            <h3>{{cruzas.anillopaloma2}} </h3>\n            <h4>Nombre: {{cruzas.nombrepaloma2}}</h4>\n            <button ion-button item-end color="primary" (click)= \'selectpigeonb()\'>\n                \n                Buscar\n              </button>\n           \n          </ion-item>\n          <ion-item>\n              <ion-label>Fecha de inicio: </ion-label>\n              <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="cruzas.fechacruza"></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label>Fecha de término: </ion-label>\n              <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="cruzas.fechatermino"></ion-datetime>\n            </ion-item>\n           \n            <ion-item>\n              <ion-label >Establecer aviso un día previo </ion-label>\n              <ion-checkbox color="dark" (click)="poneraviso()" [(ngModel)]="cruzas.aviso"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Observaciones</ion-label>\n              <ion-textarea [(ngModel)]="cruzas.observaciones" id="txtnotes" rows="12" ></ion-textarea>\n    \n          </ion-item>\n          <ion-item>\n              <ion-label floating>Modificado por:</ion-label>\n              <ion-input type="text" [(ngModel)]="cruzas.modificado"></ion-input>\n          </ion-item>\n        \n          <ion-row no-padding>\n              <ion-col text-right>\n                  <button ion-button item-end (click)="opcionescruza()" block  >Opciones</button>\n                 \n              </ion-col>\n              \n          \n          </ion-row>\n\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal3\modal3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_cruzas_service__["a" /* CruzasService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */]])
    ], Modal3Page);
    return Modal3Page;
}());

//# sourceMappingURL=modal3.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notes_service__ = __webpack_require__(67);
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
 * Generated class for the Modal4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Modal4Page = (function () {
    function Modal4Page(navCtrl, navParams, viewCtrl, modalCtrl, platform, noteService, alertCtrl, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.noteService = noteService;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.notes = [
            {}
        ];
        this.noteService.getNotes().valueChanges()
            .subscribe(function (notas) {
            _this.notes = notas;
        });
    }
    Modal4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Modal4Page');
    };
    Modal4Page.prototype.selectedpigeon = function (notes) {
        console.log(notes);
        this.viewCtrl.dismiss(notes);
    };
    Modal4Page.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Modal4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal4',template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal4\modal4.html"*/'<!--\n  Generated template for the Modal4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Selecciona un Pigeon</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list  >\n       \n        \n          <ion-item *ngFor = "let note of notes">\n            \n                 \n              <ion-avatar item-start>\n                  <img src="assets/imgs/icon.png">\n                </ion-avatar>\n           \n            <h2>No. de Anillo: </h2>\n            <h3>{{note.anillo}} </h3>\n            <h4>Nombre: {{note.nombre}}  </h4>\n            <button ion-button item-end color="primary" (click)= \'selectedpigeon(note)\'>\n              \n                Selecionar\n              </button>\n          \n         \n          </ion-item>\n         \n          \n\n      \n      </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\modal4\modal4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], Modal4Page);
    return Modal4Page;
}());

//# sourceMappingURL=modal4.js.map

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		625,
		0
	],
	"../pages/modal2/modal2.module": [
		626,
		3
	],
	"../pages/modal3/modal3.module": [
		627,
		2
	],
	"../pages/modal4/modal4.module": [
		628,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 238;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\tabs\tabs.html"*/'<ion-tabs color= "dark">\n  <ion-tab [root]="tab1Root" tabTitle="Mi Palomar" tabIcon="ios-list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Cruzas" tabIcon="ios-egg"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Favoritas" tabIcon="md-star"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cruzas_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal3_modal3__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(navCtrl, viewCtrl, modalCtrl, platform, cruzasService, alertCtrl, afAuth, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.cruzasService = cruzasService;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.cruzas = [
            {}
        ];
        this.cruzasService.getCruzas().valueChanges()
            .subscribe(function (cruzas) {
            _this.cruzas = cruzas;
        });
    }
    AboutPage.prototype.verlacruza = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal3_modal3__["a" /* Modal3Page */], { id: id });
        modal.present();
    };
    ;
    AboutPage.prototype.nuevacruza = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal3_modal3__["a" /* Modal3Page */], { id: 0 });
        modal.present();
    };
    ;
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Appigeon\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    \n\n        <ion-card *ngFor = "let cruzas of cruzas ">\n\n        <ion-list>\n            <ion-item-divider color="danger"> Fecha de la Cruza: {{cruzas.fechacruza | date }} </ion-item-divider>\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imgs/icon.png">\n              </ion-avatar>\n              \n              <h2>Anillo:{{cruzas.anillopaloma1}} </h2>\n              <h3>Nombre: {{cruzas.nombrepaloma1}} </h3>\n             \n            </ion-item>\n            <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/imgs/icon.png">\n                </ion-avatar>\n                \n                <h2>Anillo: {{cruzas.anillopaloma2}} </h2>\n                <h3>Nombre:{{cruzas.nombrepaloma2}} </h3>\n               \n              </ion-item>\n              <ion-item>\n                  <ion-label >Fecha: </ion-label>\n                  <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="cruzas.fechacruza"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Fecha de término:</ion-label>\n                  <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="cruzas.fechatermino"></ion-datetime>\n                  \n                </ion-item>\n                <ion-item *ngIf="cruzas.aviso">\n                  <ion-label color="primary">Aviso activado</ion-label>\n                  <ion-icon name="md-time" color="primary" item-start ></ion-icon>\n              </ion-item>\n              <ion-item>\n                  <button ion-button block color="primary" (click)= \'verlacruza(cruzas.id)\'>\n                      <ion-icon name="md-eye"></ion-icon>\n                      Ver Detalles\n                    </button>\n              </ion-item>\n\n          </ion-list>\n        </ion-card>\n\n         \n\n            <ion-fab right bottom>\n                <button ion-fab color="primary" (click)="nuevacruza()"><ion-icon name="md-egg"  ></ion-icon></button>\n              </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__services_cruzas_service__["a" /* CruzasService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notes_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl, afAuth, viewCtrl, modalCtrl, platform, noteService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.noteService = noteService;
        this.notes = [
            {}
        ];
        this.someTextUrl = '';
        this.id = null;
        this.noteService.getFavoritas().valueChanges()
            .subscribe(function (notas) {
            return _this.notes = notas;
        });
        this.getSomeText();
    }
    ContactPage.prototype.getSomeText = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('pacientes/' + this.id + '/').child('tac').getDownloadURL()
            .then(function (response) { return _this.someTextUrl = response; })
            .catch(function (error) { return console.log('error', error); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Appigeon\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor = "let note of notes " >\n        \n        <ion-card-content>\n          <ion-card-title>\n           Anillo: {{note.anillo}}\n            </ion-card-title>\n            <img src= {{someTextUrl}} />\n         \n          <ion-item>\n              <ion-icon name="logo-twitter" item-start></ion-icon>\n              Vuelos\n              <ion-badge item-end> {{note.vuelos}}  </ion-badge>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="md-trophy" item-start></ion-icon>\n                Premios\n                <ion-badge item-end> {{note.premios}} </ion-badge>\n              </ion-item>\n              <ion-item>\n                  <ion-icon name="md-star" color="primary" item-start></ion-icon>\n                  <ion-label>Favorita</ion-label>\n                  \n                  \n                </ion-item>\n              \n        </ion-card-content>\n      </ion-card>\n\n      \n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_notes_service__["a" /* NotesService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notes_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, viewCtrl, modalCtrl, platform, noteService, alertCtrl, afAuth, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.noteService = noteService;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.notes = [
            {}
        ];
        this.noteService.getNotes().valueChanges()
            .subscribe(function (notas) {
            _this.notes = notas;
        });
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data.email && data.uid) {
                _this.toast.create({
                    message: "Inicio de sesión exitoso!",
                    duration: 1000
                }).present();
            }
        });
    };
    HomePage.prototype.verpaciente = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { id: id });
        modal.present();
    };
    ;
    HomePage.prototype.nuevopac = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { id: 0 });
        modal.present();
    };
    HomePage.prototype.acomodar = function () {
        this.notes.sort(function (a, b) {
            return a.anillo - b.anillo;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar color="dark">\n     \n    <ion-title>Appigeon</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n        <ion-list>\n                <ion-item-divider color="primary" >PALOMAR: UZIEL </ion-item-divider>\n                <ion-item-sliding *ngFor = "let note of notes ">\n                  <ion-item>\n                    <ion-avatar item-start>\n                      <img src="assets/imgs/icon.png">\n                    </ion-avatar>\n                    <ion-icon name="md-star" color="primary" item-end *ngIf="note.favorita"></ion-icon>\n                    <h2>No. de Anillo: </h2>\n                    <h3>{{note.anillo}} </h3>\n                    <h4>Nombre: {{note.nombre}}  </h4>\n                    <p>Palomar: {{note.palomar}} </p>\n                  </ion-item>\n                  <ion-item-options side="right">\n                    <button ion-button color="primary" (click)= \'verpaciente(note.id)\'>\n                      <ion-icon name="md-eye"></ion-icon>\n                      Detalles\n                    </button>\n                    \n                  </ion-item-options>\n                  \n                </ion-item-sliding>\n              </ion-list>\n\n  \n\n\n\n\n \n      \n\n      <ion-fab right bottom>\n    \n          <button ion-fab color="primary"><ion-icon name="md-arrow-round-up"></ion-icon></button>\n    \n          <ion-fab-list side="top" >\n              \n              <button ion-fab color="secondary" (click)= "nuevopac()" ><ion-icon name="md-add"></ion-icon></button>\n              <button ion-fab color="primary" (click)= "acomodar()" ><ion-icon name="md-refresh"></ion-icon></button>\n          </ion-fab-list>\n      </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal2_modal2__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal3_modal3__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal4_modal4__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_calendar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_notes_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_cruzas_service__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyASvHTYziQORRn7NMOmfd3AmrjpSclXE9U",
    authDomain: "appidgeon1.firebaseapp.com",
    databaseURL: "https://appidgeon1.firebaseio.com",
    storageBucket: "appidgeon1.appspot.com",
    messagingSenderId: "468478037314"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal2_modal2__["a" /* Modal2Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal3_modal3__["a" /* Modal3Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal4_modal4__["a" /* Modal4Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal2/modal2.module#Modal2PageModule', name: 'Modal2Page', segment: 'modal2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal3/modal3.module#Modal3PageModule', name: 'Modal3Page', segment: 'modal3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal4/modal4.module#Modal4PageModule', name: 'Modal4Page', segment: 'modal4', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__["b" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal2_modal2__["a" /* Modal2Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal3_modal3__["a" /* Modal3Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal4_modal4__["a" /* Modal4Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal2_modal2__["a" /* Modal2Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal3_modal3__["a" /* Modal3Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal4_modal4__["a" /* Modal4Page */],
                __WEBPACK_IMPORTED_MODULE_21__services_notes_service__["a" /* NotesService */],
                __WEBPACK_IMPORTED_MODULE_22__services_cruzas_service__["a" /* CruzasService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_calendar__["a" /* Calendar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal2_modal2__ = __webpack_require__(179);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_modal2_modal2__["a" /* Modal2Page */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Ionic3\ionic\Appidgeon\Appidgeon\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesService = (function () {
    function NotesService(afDB) {
        this.afDB = afDB;
        this.notes = [];
    }
    NotesService.prototype.getNotes = function () {
        return this.afDB.list("notas/");
        //return this.notes
    };
    ;
    NotesService.prototype.getNote = function (id) {
        //return this.notes.filter( function (e, i) { return e.id == id}) [0]|| {
        //    id: null, cama: null, nombre: null, edad: null, registro: null, dx: null,
        //procedimiento: null, fechacx: null, material: null, cruce: null, consentimiento: null,
        //craneotomo: null, ekg: null, labs: null, rxtorax: null, valanest: null,
        //ayuno: null, labsexp: null, suspanticoag: null, observaciones: null,
        //elaborado: null, modificaciones:[{num: null,fecha:null}]
        return this.afDB.object("notas/" + id);
    };
    ;
    NotesService.prototype.crearpac = function (note) {
        this.afDB.database.ref("notas/" + note.id).set(note);
        //this.notes.push(note);
    };
    ;
    NotesService.prototype.editarpac = function (note) {
        // for (let i ; i< this.notes.length; i++){
        // if (this.notes[i] == note){
        //    this.notes[i] = note } }
        this.afDB.database.ref("notas/" + note.id).set(note);
    };
    NotesService.prototype.borrarpac = function (note) {
        //for (let i = 0 ; i< this.notes.length; i++){
        //  if (this.notes[i] == note){
        //    this.notes.splice(i,1);}}
        this.afDB.database.ref("notas/" + note.id).remove();
    };
    NotesService.prototype.getFavoritas = function () {
        return this.afDB.list('notas/', function (ref) { return ref.orderByChild('/favorita').equalTo(true); });
    };
    NotesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NotesService);
    return NotesService;
}());

//# sourceMappingURL=notes.service.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map