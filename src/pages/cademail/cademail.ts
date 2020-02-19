import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MainPage } from '../main/main';
import { CadnomePage } from '../cadnome/cadnome';

/**
 * Generated class for the CademailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cademail',
  templateUrl: 'cademail.html',
})
export class CademailPage {

  // Variavel para passar parametros para o servidor
  vj  = { tipo: 'cad_email', dataform: { jwt: this.sessionProvider.usuario.jwt, email: '' } };
  
  // emailREGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailREGEXP = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/;

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CademailPage');
  }

  ionViewWillEnter() {
    // is called just before the page is shown, maybe multiple
    //  times if the page goes in background and returns, here
    //  you could refresh data if it can be changed in another
    //  page
    this.vj.dataform.email  = '';
    //this.resposta = '';
    this.value_tipo_cadastro = this.navParams.get('cadastro_user');
    if( this.value_tipo_cadastro == 1 )
      console.log( 'cadastro de usuario' );
    else
      console.log( 'cadastro de artista' );
  }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern(this.emailREGEXP),
        Validators.maxLength( 60 ),
        Validators.required
      ])],
    });
  }

  processCadastrarLogin( ) {
    this.functionsProvider.ShowLoading();
    var myData = JSON.stringify( this.vj );
    this.restProvider.RequestAPIServer(myData).then((result:any) => {
      if( result.cad_email != false )
      {
        this.sessionProvider.saveNewJwt( result.cad_email );
        this.navCtrl.push(CadnomePage, { cadastro_user: this.value_tipo_cadastro } );
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

  openPage(page){
    switch(page)
    {
    case 0:
      this.navCtrl.push(MainPage);
      break;
    }
  }
}
