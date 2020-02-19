import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MainPage } from '../main/main';
import { ProtabsPage } from '../protabs/protabs';

/**
 * Generated class for the CadprocatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadprocat',
  templateUrl: 'cadprocat.html',
})
export class CadprocatPage {

  // Variavel para passar parametros para o servidor
  vj  = { tipo: 'valida_celular', dataform: { jwt: '', codigo_sms: '' } };

  // Variavel para receber a resposta do servidor
  resposta:any = {};
  public lista_categorias:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    public sessionProvider: SessionProvider,
    public functionsProvider: FunctionsProvider,
    ) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadprocatPage');
    this.getOpcoesCategoria1();
  }

  getOpcoesCategoria1() {
    this.functionsProvider.ShowLoading();
    var req = { tipo: 'get_categorias_1', dataform: { jwt: this.sessionProvider.usuario.jwt } };
    var myData = JSON.stringify( req );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.functionsProvider.DismmissLoading();
      this.resposta = result;
      if( this.resposta.get_categorias_1 != true )
      {
        this.sessionProvider.saveNewJwt( this.resposta.get_categorias_1 );
        this.lista_categorias = this.resposta.categorias;
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

  processCadastraAnuncioBasico( id_categoria ) {
    this.functionsProvider.ShowLoading();
    var req = { tipo: 'cad_anuncio_basico', dataform: { jwt: this.sessionProvider.usuario.jwt, id_categoria_1: id_categoria } };
    var myData = JSON.stringify( req );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.functionsProvider.DismmissLoading();
      this.resposta = result;
      if( this.resposta.cad_anuncio_basico != true )
      {
        this.sessionProvider.saveNewJwt( this.resposta.cad_anuncio_basico );
        this.navCtrl.push(ProtabsPage);
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

}
