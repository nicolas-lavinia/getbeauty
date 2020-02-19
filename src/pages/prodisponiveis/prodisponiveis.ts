import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { MainPage } from '../main/main';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the ProdisponiveisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prodisponiveis',
  templateUrl: 'prodisponiveis.html',
})
export class ProdisponiveisPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public sessionProvider: SessionProvider
    ) {
      this.viewCtrl = this.navParams.get('viewCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdisponiveisPage');
  }

  ionViewCanEnter() {
    return( this.sessionProvider.checkLogin() );
  }

  public dismissPushTab(){
    this.viewCtrl.dismiss();
  }

  public modalModalTab(){
    let modal = this.modalCtrl.create('ModalTabsPage');
    modal.present();
  }

  public SairAmbienteArtista(){
    this.sessionProvider.LogOffUser();
    this.navCtrl.push(MainPage);
  }
  
}
