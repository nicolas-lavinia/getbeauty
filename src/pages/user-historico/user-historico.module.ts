import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserHistoricoPage } from './user-historico';

@NgModule({
  declarations: [
    UserHistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserHistoricoPage),
  ],
})
export class UserHistoricoPageModule {}
