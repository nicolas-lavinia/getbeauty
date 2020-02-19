import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cadastro1Page } from './cadastro1';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    Cadastro1Page,
  ],
  imports: [
    IonicPageModule.forChild(Cadastro1Page),
    BrMaskerModule,
  ],
})
export class Cadastro1PageModule {}
