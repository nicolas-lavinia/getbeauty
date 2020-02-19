import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { MyApp } from './app.component';
import { RestProvider } from '../providers/rest/rest';
import { StorageProvider } from '../providers/storage/storage';
import { SessionProvider } from '../providers/session/session';
import { FunctionsProvider } from '../providers/functions/functions';

import { Cadastro1PageModule } from '../pages/cadastro1/cadastro1.module';
import { Cadastro2PageModule } from '../pages/cadastro2/cadastro2.module';
import { MainPageModule } from '../pages/main/main.module';
import { CadprocatPageModule } from '../pages/cadprocat/cadprocat.module';
import { ProtabsPageModule } from '../pages/protabs/protabs.module';
import { ProdisponiveisPageModule } from '../pages/prodisponiveis/prodisponiveis.module';
import { ProperfilPageModule } from '../pages/properfil/properfil.module';
import { ProcomprarPageModule } from '../pages/procomprar/procomprar.module';
import { CadcelPageModule } from '../pages/cadcel/cadcel.module';
import { CadcepPageModule } from '../pages/cadcep/cadcep.module';
import { CademailPageModule } from '../pages/cademail/cademail.module';
import { CadnomePageModule } from '../pages/cadnome/cadnome.module';
import { CadvalcelPageModule } from '../pages/cadvalcel/cadvalcel.module';
import { PrecisagrandeareaPageModule } from '../pages/precisagrandearea/precisagrandearea.module';
import { PrecisasubareaPageModule } from '../pages/precisasubarea/precisasubarea.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    IonicModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrMaskerModule,
    MainPageModule,

    Cadastro1PageModule,
    Cadastro2PageModule,
    CadprocatPageModule,
    
    ProtabsPageModule,
    ProdisponiveisPageModule,
    ProcomprarPageModule,
    ProperfilPageModule,
    
    CadcelPageModule,
    CadvalcelPageModule,
    CadcepPageModule,
    CademailPageModule,
    CadnomePageModule,

    PrecisagrandeareaPageModule,
    PrecisasubareaPageModule,

  ],
  exports: [ BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    StorageProvider,
    SessionProvider,
    FunctionsProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
