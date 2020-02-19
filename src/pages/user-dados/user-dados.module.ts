import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDadosPage } from './user-dados';

@NgModule({
  declarations: [
    UserDadosPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDadosPage),
  ],
})
export class UserDadosPageModule {}
