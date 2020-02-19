import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MainPage } from '../main/main';
import { CadvalcelPage } from '../cadvalcel/cadvalcel';

/**
 * Generated class for the CadcelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadcel',
  templateUrl: 'cadcel.html',
})
export class CadcelPage {

  // Variavel para passar parametros para o servidor
  vj  = { tipo: 'cad_cel', dataform: { celular: '' } };
  
  // Credenciais para validar formulario
  credentialsForm: FormGroup;
  
  public value_tipo_cadastro:number;
  public txt_cadastro_cel:string;

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
    console.log('ionViewDidLoad CadcelPage');
  }

  ionViewWillEnter() {
    // is called just before the page is shown, maybe multiple
    //  times if the page goes in background and returns, here
    //  you could refresh data if it can be changed in another
    //  page
    this.vj.dataform.celular  = '';
    if( this.navParams.get('cadastro_user') == 1 )
    {
      console.log( 'cadastro de usuario' );
      this.value_tipo_cadastro = 1;
      this.txt_cadastro_cel = 'Ótimo, agora que sabemos o que procura, precisamos saber quem é você. Primeiro, informe o seu número de celular.';
    }
    else
    {
      console.log( 'cadastro de artista' );
      this.value_tipo_cadastro = 0;
      this.txt_cadastro_cel = 'Precisamos saber quem é você. Primeiro, informe o seu número de celular.';
    }
  }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      celular: ['', Validators.compose([
        Validators.minLength( 15 ),
        Validators.maxLength( 15 ),
        Validators.required
      ])],
    });
  }

  processCadastrarLogin( ) {
    this.functionsProvider.ShowLoading();
    var myData = JSON.stringify( this.vj );
    this.restProvider.RequestAPIServer(myData).then((result:any) => {
      this.functionsProvider.DismmissLoading();
      if( result.cadastro1 != false )
      {
        // console.log( "resposta informou cadastro1 ok");
        this.sessionProvider.activeUser( this.vj.dataform.celular, result.jwt, result.status );
        this.GeraCodigoEnviaSMS();
      }
      else
      {
        switch( result.status )
        {
        case 1:
          this.sessionProvider.activeUser( this.vj.dataform.celular, result.jwt, result.status );
          this.navCtrl.push(CadvalcelPage, { cadastro_user: this.value_tipo_cadastro });
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
    this.restProvider.RequestAPIServer(myData).then((result:any) => {
      if( result.gera_codigo_envia_sms != false )
      {
        this.sessionProvider.saveNewJwt( result.gera_codigo_envia_sms );
        this.navCtrl.push(CadvalcelPage, { cadastro_user: this.value_tipo_cadastro } );
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
