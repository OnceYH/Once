import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-multi-profile',
  templateUrl: 'multi-profile.html',
})

export class MultiProfilePage {
  profileData: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileData = navParams.get('data');
    console.log(this.profileData);
  }

  ionViewDidLoad() {
    //console.log(this.data);
     //this.data;
  }
}