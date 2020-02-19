import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SessionProvider } from '../../providers/session/session';
import { ProtabsPage } from '../protabs/protabs';
import { CadprocatPage } from '../cadprocat/cadprocat';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    private sessionProvider: SessionProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewDidEnter() {
    // is the same but called just after the page is shown,
    //  maybe multiple times if the page goes in background 
    //  and returns, for instance you could show an alert just
    //  when the page become in front
    
    console.log('ionViewDidEnter MainPage');
    this.sessionProvider.readUser().then((res) => {
      
      console.log('ionViewDidEnter MainPage atribui valor:', this.sessionProvider.usuario.jwt );
      
      if( this.sessionProvider.checkLogin() )
        this.navCtrl.push(ProtabsPage);

    });
  }

  ambienteArtistaTab() {
    this.navCtrl.push('CadcelPage', { cadastro_user: 0 });
  }

  modalModalTab(){
    let modal = this.modalCtrl.create('OperationPage');
    modal.present();
  }

  ambienteUserTab(){
    this.navCtrl.push('PrecisagrandeareaPage', {}, {animate: true, direction: 'back'});
    //this.navCtrl.push('UserMainPage', {}, {animate: true, direction: 'back'});
  }
}
