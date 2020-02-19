import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FunctionsProvider {

  private loading:any;
  private toast:any;
  
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    ) {
    console.log('Hello FunctionsProvider Provider');
  }

  ShowLoading() {
    this.loading = this.loadingCtrl.create({
      content: '',
      dismissOnPageChange: true,
      showBackdrop: false,
    });
    this.loading.present();
  }

  DismmissLoading() {
    this.loading.dismiss();
  }

  ShowAlert( txt, timeout, _dismissOnPageChange_ ) {
    this.toast = this.toastCtrl.create({
      message: txt,
      duration: timeout,
      position: 'top',
      dismissOnPageChange: _dismissOnPageChange_,
    });
    this.toast.present();
  }

  DismmissAlert() {
    this.toast.dismiss();
  }

}
