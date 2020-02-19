import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MainPage } from '../main/main';
import { CadprocatPage } from '../cadprocat/cadprocat';

/**
 * Generated class for the Cadastro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro2',
  templateUrl: 'cadastro2.html',
})
export class Cadastro2Page {

  // Variavel para passar parametros para o servidor
  vj  = { tipo: 'valida_celular', dataform: { jwt: '', codigo_sms: '' } };
  
  // Variavel para receber a resposta do servidor
  resposta:any = {};

  // Credenciais para validar formulario
  credentialsForm: FormGroup;

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
    this.resposta = '';
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Cadastro1Page');
  }

  processValidarCelular( ) {
    this.functionsProvider.ShowLoading();
    this.vj.dataform.jwt = this.sessionProvider.usuario.jwt;
    var myData = JSON.stringify( this.vj );
    console.log( this.vj );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.functionsProvider.DismmissLoading();
      this.resposta = result;
      if( this.resposta.valida_celular != true )
      {
        this.sessionProvider.saveNewJwt( this.resposta.valida_celular );
        if( this.resposta.status == 1 )
          this.navCtrl.push(CadprocatPage);
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
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.resposta = result;
      console.log( 'resposta gera_codigo_envia_sms',  this.resposta );
      if( this.resposta.gera_codigo_envia_sms != false )
      {
        this.sessionProvider.usuario.jwt = this.resposta.gera_codigo_envia_sms;
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
