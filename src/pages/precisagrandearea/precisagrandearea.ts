import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrecisasubareaPage } from '../precisasubarea/precisasubarea';
import { RestProvider } from '../../providers/rest/rest';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the PrecisagrandeareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-precisagrandearea',
  templateUrl: 'precisagrandearea.html',
})
export class PrecisagrandeareaPage {

  // Variavel para receber a resposta do servidor
  resposta:any = {};
  public form = new Array<Object>( );

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    // public sessionProvider: SessionProvider,
    public functionsProvider: FunctionsProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrecisagrandeareaPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter PrecisagrandeareaPage');

    this.getOpcoesGrandeArea( );
  }

  getOpcoesGrandeArea( ) {
    this.functionsProvider.ShowLoading();
    var req = { tipo: 'get_grandes_areas' };
    var myData = JSON.stringify( req );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.functionsProvider.DismmissLoading();
      this.resposta = result;
      if( this.resposta.get_grandes_areas == true )
      {
        console.log( this.resposta.grandes_areas );
        this.form = this.resposta.grandes_areas;

      }
    }, (err) => {
      this.functionsProvider.DismmissLoading();
      console.log( err );
    });
  }

  openPage( page: number, nome: string ){
    console.log( page );
    console.log( nome );
    
    this.navCtrl.push(PrecisasubareaPage, { id_grande_area: page, grande_area: nome } );
  }
}
