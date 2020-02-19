import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MainPage } from '../main/main';
import { CademailPage } from '../cademail/cademail';

/**
 * Generated class for the CadvalcelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadvalcel',
  templateUrl: 'cadvalcel.html',
})
export class CadvalcelPage {

  // Variavel para passar parametros para o servidor
  vj  = { tipo: 'valida_celular', dataform: { jwt: this.sessionProvider.usuario.jwt, codigo_sms: '' } };

  // Credenciais para validar formulario
  credentialsForm: FormGroup;
  
  public value_tipo_cadastro:number;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private restProvider: RestProvider,
    private sessionProvider: SessionProvider,
    private formBuilder: FormBuilder,
    private functionsProvider: FunctionsProvider,
    ) {
  }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      codigo_sms: ['', Validators.compose([
        Validators.minLength( 6 ),
        Validators.maxLength( 6 ),
        Validators.required
      ])],
    });
  }

  ionViewWillEnter() {
    // is called just before the page is shown, maybe multiple
    //  times if the page goes in background and returns, here
    //  you could refresh data if it can be changed in another
    //  page
    this.vj.dataform.codigo_sms  = '';
    this.value_tipo_cadastro = this.navParams.get('cadastro_user');
    if( this.value_tipo_cadastro == 1 )
      console.log( 'cadastro de usuario' );
    else
      console.log( 'cadastro de artista' );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadvalcelPage');
  }

  processValidarCelular( ) {
    this.functionsProvider.ShowLoading();
    var myData = JSON.stringify( this.vj );
    this.restProvider.RequestAPIServer(myData).then((result:any) => {
      this.functionsProvider.DismmissLoading();
      if( result.valida_celular != true )
      {
        this.sessionProvider.saveNewJwt( result.valida_celular );
        if( result.status == 1 )
          this.navCtrl.push(CademailPage, { cadastro_user: this.value_tipo_cadastro } );
        else
        {
          this.vj.dataform.codigo_sms = '';
          this.functionsProvider.ShowAlert( 'Código inválido.', 3000, true );
        }
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

  ReenviaCodigoSMS(){
    var req = { tipo: 'gera_codigo_envia_sms', dataform: { jwt: this.sessionProvider.usuario.jwt } };
    var myData = JSON.stringify( req );
    this.restProvider.RequestAPIServer(myData).then((result:any) => {
      if( result.gera_codigo_envia_sms != false )
      {
        this.sessionProvider.usuario.jwt = result.gera_codigo_envia_sms;
        this.functionsProvider.ShowAlert( 'Novo Código enviado', 3000, true );
      }
      else
      {
        this.sessionProvider.LogOffUser();
        this.navCtrl.push(MainPage);
      }
    }, (err) => {
      console.log( err );
    });
  }

  openPage(page){
    switch(page)
    {
    case 0:
      this.sessionProvider.LogOffUser();
      this.navCtrl.push(MainPage);
      break;
    }
  }

}
