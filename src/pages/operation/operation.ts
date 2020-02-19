import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the OperationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operation',
  templateUrl: 'operation.html',
})
export class OperationPage {

  public data: {viewCtrl: any};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.data = {
        viewCtrl: this.viewCtrl
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperationPage');
  }

  public dismissOperation(){
    this.viewCtrl.dismiss();
  }

}
