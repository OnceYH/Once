import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AsanaServiceProvider } from "../../providers/asana-service";
import { ProfileViewPage } from '../profile-view/profile-view';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  users: any;
  private isLoading : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public asanaServiceProvider: AsanaServiceProvider) {
    var temp = this;
    setTimeout(function() {
      temp.getUsers()
      .then(result => {
        temp.isLoading = false;
      }); 
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
  gotoProfile(userId) {
    this.navCtrl.push(ProfileViewPage, { 'userId' : userId });
  }

  async getUsers(){
    await this.asanaServiceProvider.getUsers()
    .then(data => {
      this.users = data;
    }); 
  }

}
