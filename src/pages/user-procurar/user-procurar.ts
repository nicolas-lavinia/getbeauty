import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { MainPage } from '../main/main';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the UserProcurarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-procurar',
  templateUrl: 'user-procurar.html',
    providers: [
    RestProvider
  ]
})
export class UserProcurarPage {

    // Variavel para passar parametros para o servidor
    vj = { tipo: 'getstations' };
  
    // Variavel para receber a resposta do servidor
    public lista_stations:any;
    // public lista_stations[] = { id: '', nome: '', endereco: '', latitude: '', longitude: '', status: '', vagas: '', bikes: '' };
    private lat_inicial:number;
    private lng_inicial:number;
  
    // variaveis para o refresh
    public refresher;
    public isRefreshing:boolean = false;

    // variavel para o popup de carregando...
    public loader;
    private mapa_pronto = 0;
    
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private restProvider: RestProvider,
    ) {
      this.viewCtrl = this.navParams.get('viewCtrl');
  }

  ionViewDidLoad() {
    // is called when the page DOM has been loaded, before than
    //  the page is shown, also a single time per page 
    // instantiation, here you can do initialization thet needs
    //  the HTML DOM to be ready
    console.log('ionViewDidLoad UserProcurarPage');
    this.abreCarregando();
  }
  
  ionViewWillEnter() {
    // is called just before the page is shown, maybe multiple
    //  times if the page goes in background and returns, here
    //  you could refresh data if it can be changed in another
    //  page
    this.getStations();
  }

  ionViewDidEnter() {
    // is the same but called just after the page is shown,
    //  maybe multiple times if the page goes in background 
    //  and returns, for instance you could show an alert just
    //  when the page become in front

  }

  public dismissUserTab(){
    this.viewCtrl.dismiss(0,'',{animate: true, direction: 'forward'});
  }

  public modalModalTab(){
    let modal = this.modalCtrl.create('ModalTabsPage');
    modal.present();
  }

  getStations() {
    var myData = JSON.stringify(this.vj);
    
    this.restProvider.RequestAPIServer(myData).then((result) => {
      this.lista_stations = result;
      // for (var i in this.lista_stations) {
      //   this.arr_list_stations.push(this.lista_stations[i]);
      // }
      this.lat_inicial = JSON.parse( this.lista_stations[0].latitude );
      this.lng_inicial = JSON.parse( this.lista_stations[0].latitude );
      
      console.log(result);
      console.log( this.lat_inicial, this.lng_inicial );
      if( this.isRefreshing )
      {
        this.refresher.complete();
        this.isRefreshing = false;
      }
      this.fechaCarregando();
      // while( this.mapa_pronto == 0 );

      // this.ngAfterViewInit_();


    }, (err) => {
      console.log( err );
      if( this.isRefreshing )
      {
        this.refresher.complete();
        this.isRefreshing = false;
      }
      this.fechaCarregando();
    });
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
      // duration: 3000
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }
}
