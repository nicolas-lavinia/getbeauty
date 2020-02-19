import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SessionProvider } from '../../providers/session/session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MainPage } from '../main/main';
import { CadprocatPage } from '../cadprocat/cadprocat';

/**
 * Generated class for the CadcepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadcep',
  templateUrl: 'cadcep.html',
})
export class CadcepPage {

  // Variavel para passar parametros para o servidor
  vj  = { tipo: 'cad_cep', dataform: { jwt: this.sessionProvider.usuario.jwt, cep: '' } };
  
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
    console.log('ionViewDidLoad CadcepPage');
  }

  ionViewWillEnter() {
    // is called just before the page is shown, maybe multiple
    //  times if the page goes in background and returns, here
    //  you could refresh data if it can be changed in another
    //  page
    this.vj.dataform.cep = '';
    this.value_tipo_cadastro = this.navParams.get('cadastro_user');
    if( this.value_tipo_cadastro == 1 )
      console.log( 'cadastro de usuario' );
    else
      console.log( 'cadastro de artista' );
  }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      cep: ['', Validators.compose([
        Validators.minLength( 9 ),
        Validators.maxLength( 9 ),
        Validators.required
      ])],
    });
  }

  processCadastrarLogin( ) {
    this.functionsProvider.ShowLoading();
    this.vj.dataform.jwt = this.sessionProvider.usuario.jwt;
    var myData = JSON.stringify( this.vj );
    this.restProvider.RequestAPIServer(myData).then((result:any) => {
      if( result.cad_cep != false )
      {
        this.sessionProvider.saveNewJwt( result.cad_cep );
        if( this.value_tipo_cadastro == 1 )
          this.navCtrl.push('UserMainPage', {}, {animate: true, direction: 'back'});
          //this.navCtrl.push(CadprocatPage, { cadastro_user: this.value_tipo_cadastro } );
        else
          this.navCtrl.push(CadprocatPage, { cadastro_user: this.value_tipo_cadastro } );
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
