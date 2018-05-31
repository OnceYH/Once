import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileViewPage } from '../profile-view/profile-view';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersProvider } from '../../providers/users/users'
import { MultiProfilePage } from '../multi-profile/multi-profile';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {

  profileData: FirebaseListObservable<any[]>
  //profileData2: any[]
  constructor(private _usersProv: UsersProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.profileData = _usersProv.getUsers();
  }

  viewProfile(profile) {
    console.log(profile.firstName);

    this.navCtrl.push(MultiProfilePage, {
      data: profile
    });
  }

  ionViewDidLoad() {
    console.log("loaded");
  }
}