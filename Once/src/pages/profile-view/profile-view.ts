import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AsanaServiceProvider } from "../../providers/asana-service";
import { UserTasksPage } from '../user-tasks/user-tasks';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-profile-view',
  templateUrl: 'profile-view.html',
})
export class ProfileViewPage {

  profileData: FirebaseObjectObservable<Profile>

  constructor(
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    private afAuth: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
      
        this.profileData = this.afDatabase.object(`users/${data.uid}`)
      }
      else {
        //
      }
    })
  }

  updateProfile()
  {
    this.navCtrl.push(ProfilePage)
  }

}
