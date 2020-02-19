import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadcepPage } from './cadcep';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadcepPage,
  ],
  imports: [
    IonicPageModule.forChild(CadcepPage),
    BrMaskerModule
  ],
})
export class CadcepPageModule {}
