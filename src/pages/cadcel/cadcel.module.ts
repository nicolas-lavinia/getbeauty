import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadcelPage } from './cadcel';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadcelPage,
  ],
  imports: [
    IonicPageModule.forChild(CadcelPage),
    BrMaskerModule
  ],
})
export class CadcelPageModule {}
