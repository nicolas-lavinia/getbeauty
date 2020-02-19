import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProcurarPage } from './user-procurar';

@NgModule({
  declarations: [
    UserProcurarPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProcurarPage),
  ],
})
export class UserProcurarPageModule {}
