import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Cadastro2Page } from '../cadastro2/cadastro2';
// import { Cadastro3Page } from '../cadastro3/cadastro3';
// import { TabsPage } from '../tabs/tabs';
// import { LoginPage } from '../login/login';
import { FunctionsProvider } from '../../providers/functions/functions';
import { Cadastro2Page } from '../cadastro2/cadastro2';
import { MainPage } from '../main/main';

/**
 * Generated class for the Cadastro1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro1',
  templateUrl: 'cadastro1.html',
})
export class Cadastro1Page {

  // Variavel para passar parametros para o servidor
  vj  = { tipo: 'cadastro1', dataform: { celular: '', email: '', nome: '', cep: '' } };
  // vjs = { tipo: 'cadastro1', dataform: { celular: '', email: '', p: '' } };
  
  // Variavel para receber a resposta do servidor
  resposta:any = {};

  // variavel para a senha em hash
  // CryptoJS = require('crypto-js');

  // emailREGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailREGEXP = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/;
  // PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  nomeREGEXP = /^([a-zA-ZÁÉÍÓÚÂÊÎÔÛÃÕÇáéíóúâêîôûãõç.'-]+\s+){1,6}[a-zA-zÁÉÍÓÚÂÊÎÔÛÃÕÇáéíóúâêîôûãõç.'-]+$/;

  // Credenciais para validar formulario
  credentialsForm: FormGroup;

    
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    public sessionProvider: SessionProvider,
    public formBuilder: FormBuilder,
    public functionsProvider: FunctionsProvider,
    ) {
  }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      celular: ['', Validators.compose([
        Validators.minLength( 15 ),
        Validators.maxLength( 15 ),
        Validators.required
      ])],
      nome: ['', Validators.compose([
        Validators.pattern(this.nomeREGEXP),
        Validators.maxLength( 200 ),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.pattern(this.emailREGEXP),
        Validators.maxLength( 60 ),
        Validators.required
      ])],
      cep: ['', Validators.compose([
        Validators.minLength( 9 ),
        Validators.maxLength( 9 ),
        Validators.required
      ])],
      // senha: ['', Validators.compose([
      //   Validators.minLength(  6 ),
      //   Validators.maxLength( 16 ),
      //   Validators.required
      // ])],
      // senha2: ['', Validators.compose([
      //   Validators.minLength(  6 ),
      //   Validators.maxLength( 16 ),
      //   Validators.required,
      // ])],
    });

  }

  // ionViewCanEnter() {
  //   return false;
  // }

  //Our custom validation
  // public valida_senhas_iguais(control: AbstractControl): {[key: string]: any;}  {
  //   //  var val: string = control.value;
  //    return ( this.vj.dataform.senha != this.vj.dataform.senha2 ) ?
  //    { 'senhas_iguais': false } :
  //        null;
  // };

  ionViewWillEnter() {
    // is called just before the page is shown, maybe multiple
    //  times if the page goes in background and returns, here
    //  you could refresh data if it can be changed in another
    //  page
    this.vj.dataform.celular  = '';
    this.vj.dataform.email  = '';
    this.vj.dataform.nome  = '';
    this.vj.dataform.cep = '';
    // this.vj.dataform.senha  = '';
    // this.vj.dataform.senha2 = '';
    this.resposta = '';
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Cadastro1Page');
  }

  processCadastrarLogin( ) {
    this.functionsProvider.ShowLoading();
    var myData = JSON.stringify( this.vj );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.functionsProvider.DismmissLoading();
      this.resposta = result;
      if( this.resposta.cadastro1 != false )
      {
        // console.log( "resposta informou cadastro1 ok");
        this.sessionProvider.activeUser( this.vj.dataform.celular, this.resposta.jwt, this.resposta.status );
        this.GeraCodigoEnviaSMS();
      }
      else
      {
        switch( this.resposta.status )
        {
        case 1:
          this.sessionProvider.activeUser( this.vj.dataform.celular, this.resposta.jwt, this.resposta.status );
          this.navCtrl.push(Cadastro2Page);
          break;
        // case 2:
        //   this.sessionProvider.activeUser( this.vjs.dataform.email, this.resposta.jwt, this.resposta.pais_user, this.resposta.status );
        //   this.navCtrl.push(Cadastro3Page);
        //   break;
        // case 3:
        // case 4:
        //   this.sessionProvider.activeUser( this.vjs.dataform.email, this.resposta.jwt, this.resposta.pais_user, this.resposta.status );
        //   this.navCtrl.push(TabsPage);
        //   break;
        default:
          // this.vj.dataform.senha  = '';
          // this.vj.dataform.senha2 = '';
          this.resposta = '';
          this.functionsProvider.ShowAlert( 'Este email já foi cadastrado', 3000, true );
          break;
        }
        
      }
    }, (err) => {
      this.functionsProvider.DismmissLoading();
      console.log( err );
    });
  }

  GeraCodigoEnviaSMS( ) {
    var req = { tipo: 'gera_codigo_envia_sms', dataform: { jwt: this.sessionProvider.usuario.jwt } };
    var myData = JSON.stringify( req );
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.resposta = result;
      console.log( 'resposta gera_codigo_envia_sms',  this.resposta );
      if( this.resposta.gera_codigo_envia_sms != false )
      {
        this.sessionProvider.saveNewJwt( this.resposta.gera_codigo_envia_sms );
        this.navCtrl.push(Cadastro2Page);
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
      this.navCtrl.push(MainPage);
      break;
    }
  }
}
