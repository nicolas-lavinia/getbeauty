import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FunctionsProvider } from '../../providers/functions/functions';
import { CadcelPage } from '../cadcel/cadcel';

/**
 * Generated class for the PrecisasubareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-precisasubarea',
  templateUrl: 'precisasubarea.html',
})
export class PrecisasubareaPage {

  // Variavel para receber a resposta do servidor
  resposta:any = {};
  private id_grande_area:number;
  public grande_area:string;

  public form = new Array<Object>( );
  // public form = [
  //   { val: 'Pepperoni', isChecked: true },
  //   { val: 'Sausage', isChecked: false },
  //   { val: 'Mushroom', isChecked: false }
  // ];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    public sessionProvider: SessionProvider,
    public functionsProvider: FunctionsProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrecisasubareaPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter PrecisasubareaPage');
    this.id_grande_area = this.navParams.get('id_grande_area');
    this.grande_area = this.navParams.get('grande_area');
    this.getOpcoesSubArea( this.id_grande_area );
  }

  getOpcoesSubArea( area:number ) {
    this.functionsProvider.ShowLoading();
    var req = { tipo: 'get_sub_areas', dataform: { grandearea: area } };
    var myData = JSON.stringify( req );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.functionsProvider.DismmissLoading();
      this.resposta = result;
      if( this.resposta.get_sub_areas == true )
      {
        this.form = this.resposta.sub_areas;
      }
    }, (err) => {
      this.functionsProvider.DismmissLoading();
      console.log( err );
    });
  }

  openPage(page){
    switch(page)
    {
    case 0:
      this.navCtrl.push(CadcelPage, { cadastro_user: 1 } );
      break;
    }
  }

}
