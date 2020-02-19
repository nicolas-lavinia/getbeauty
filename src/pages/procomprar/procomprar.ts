import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MainPage } from '../main/main';

/**
 * Generated class for the ProcomprarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-procomprar',
  templateUrl: 'procomprar.html',
})
export class ProcomprarPage {

  // Variavel para receber a resposta do servidor
  resposta:any = {};
  public lista_pct_diamantes:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    public sessionProvider: SessionProvider,
    public functionsProvider: FunctionsProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcomprarPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ProcomprarPage');
    this.getOpcoesPctDiamantes();
  }

  getOpcoesPctDiamantes() {
    this.functionsProvider.ShowLoading();
    var req = { tipo: 'get_pct_diamantes', dataform: { jwt: this.sessionProvider.usuario.jwt } };
    var myData = JSON.stringify( req );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.functionsProvider.DismmissLoading();
      this.resposta = result;
      if( this.resposta.get_pct_diamantes != true )
      {
        this.sessionProvider.saveNewJwt( this.resposta.get_pct_diamantes );
        this.lista_pct_diamantes = this.resposta.pct_diamantes;
      }
      else
      {
        this.sessionProvider.LogOffUser();
        this.navCtrl.push(MainPage);
      }
    }, (err) => {
      this.functionsProvider.DismmissLoading();
      console.log( err );
    });
  }

  processComprarPctDiamantes( id ){
    console.log( 'ID pct: ', id );
  }
}
