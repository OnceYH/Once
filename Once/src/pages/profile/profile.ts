import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { HomePage } from '../home/home';
import { Camera , CameraOptions} from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image/image';
import { ProfileViewPage } from '../profile-view/profile-view';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;
  imageUrls = [];
  private images = [];

  constructor(
    private camera: Camera,
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private imageSrv: ImageProvider) 
    { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  createProfile()
  {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`users/${auth.uid}`).update(this.profile)
      .then(() => this.navCtrl.setRoot(ProfileViewPage));
    })
  }

}
