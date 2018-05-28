import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileViewPage } from '../profile-view/profile-view';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersProvider } from '../../providers/users/users'


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

  profileData: FirebaseListObservable<any[]>

  constructor(private _usersProv: UsersProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.profileData = _usersProv.getUsers();
  }

  /*getUsers(){
    return this.profileData;
  }*/
  
  ionViewDidLoad() {
   console.log(this.profileData);
  }
  

}
