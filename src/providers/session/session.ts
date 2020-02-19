import { Injectable } from '@angular/core';
import { StorageProvider } from '../storage/storage';
import { MainPage } from '../../pages/main/main';
import { App } from 'ionic-angular';

// import { NavController } from 'ionic-angular';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

    // Variavel para jwt do usuario
  public usuario = { jwt: '', login: '', status_user: 0 };

  constructor(
    // public navCtrl: NavController, 
    public storageProvider: StorageProvider,
    private appCtrl: App,
    ) {
    console.log('Hello SessionProvider Provider');

    // console.log( 'criou uma instancia de usuario' );
    //this.usuario.jwt = '';

    // inicialização das variaveis do usuário
    this.initUser();
    
  }
  activeUser( login: string, jwt: string, status_user: number ) {
    this.usuario.jwt = jwt;
    this.usuario.login = login;
    this.usuario.status_user = status_user;
    return new Promise(( result ) => {
      this.storageProvider.grava_storage( 'jwt_user', this.usuario ).then((val)=>{
        val = true;
        console.log( "salvou usuario", this.usuario.jwt );
        result( val );
      });
    });
  }

  initUser(){
    this.storageProvider.le_storage( 'jwt_user' ).then((val)=>{
      if( val == null )
      {
        console.log( 'inicializou a memoria com um usuario zerado' );
        this.usuario.jwt = '';
        this.usuario.login = '';
        this.usuario.status_user = 0;
        this.storageProvider.grava_storage( 'jwt_user', this.usuario );
      }
      else
      {

      }
    });
  }

  LogOffUser(){
    this.usuario.jwt = '';
    this.usuario.status_user = 0;
    console.log( 'zerou jwt' );
    this.storageProvider.grava_storage( 'jwt_user', this.usuario );
    // this.appCtrl.getRootNav().push(MainPage);
  }

  readUser() {
    return new Promise(( result ) => {
      this.storageProvider.le_storage( 'jwt_user' ).then((val) => {
        this.usuario.jwt = val.jwt;
        this.usuario.login = val.login;
        this.usuario.status_user = val.status_user;
        console.log( "Read User:", this.usuario );
        result( val );
      });
    });
  }

  saveNewJwt( new_jwt ){
    this.usuario.jwt = new_jwt;
    this.storageProvider.grava_storage( 'jwt_user', this.usuario );
    console.log( 'Salvou novo JWT' );
  }

  checkLogin(){
    if( ( this.usuario.jwt == '' ) || ( this.usuario.jwt == null ) || ( this.usuario.jwt == undefined ) )
    {
      console.log( 'pagina nao autorizada' );
      return false;
    }  
    else
    {
      // console.log( 'autorizacao' );
      return true;
    }
  }
}
