import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the UserMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-main',
  templateUrl: 'user-main.html',
})

export class UserMainPage {

  userOneRoot = 'UserProcurarPage'
  userTwoRoot = 'UserHistoricoPage'
  userThreeRoot = 'UserDadosPage'

  public data: {viewCtrl: any};

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {
      this.data = {
        viewCtrl: this.viewCtrl
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserMainPage');
  }

}
