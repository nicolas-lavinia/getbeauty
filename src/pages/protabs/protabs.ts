import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ProtabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-protabs',
  templateUrl: 'protabs.html',
})
export class ProtabsPage {

  linkOnePro   = 'ProdisponiveisPage'
  linkTwoPro   = 'ProcomprarPage'
  linkThreePro = 'ProperfilPage'

  public data: {viewCtrl: any};

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController)
    {
      this.data = {
        viewCtrl: this.viewCtrl
      }
    }
}
