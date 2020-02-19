import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadnomePage } from './cadnome';

@NgModule({
  declarations: [
    CadnomePage,
  ],
  imports: [
    IonicPageModule.forChild(CadnomePage),
  ],
})
export class CadnomePageModule {}
