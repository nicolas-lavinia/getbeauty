import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(
    private storage: Storage,
    ) {
      // this.blank_storage();
      //console.log('Hello StorageProvider Provider');
  }

  public grava_storage(key: string, valor: any) {
    return this.storage.set(key, valor);
  }
 
  public le_storage(key: string ) {
    return this.storage.get(key);
  };

  public apaga_storage(key: string) {
    return this.storage.remove(key);
  }

  public blank_storage( ) {
    // console.log( 'apagou memoria');
    this.storage.clear();
  }
}
