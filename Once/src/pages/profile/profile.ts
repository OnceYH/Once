import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { HomePage } from '../home/home';
import { Camera , CameraOptions} from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image/image';
import { ProfileViewPage } from '../profile-view/profile-view';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit{
  
  profileData: FirebaseObjectObservable<Profile>;
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
    { 
      
    }

  ngOnInit() {
    this.afAuth.authState.take(1).subscribe(data => { 
      if (data && data.email && data.uid) {
        this.profileData = this.afDatabase.object(`users/${data.uid}`);
        console.log(data);
        //this.setProfile(this.profileData);
      }
    });
  }

  setProfile(data) {
    console.log(JSON.stringify(data));
    // this.profile.username = data["username"];
    // this.profile.firstName = data["firstName"];
    // this.profile.lastName = data["lastName"];
    // this.profile.bio = data["bio"];
    // this.profile.location = data["location"];
    // this.profile.quote = data["quote"];
    // this.profile.Department = data["Department"];
    // this.profile.dinner = data["dinner"];
    console.log(this.profile.username)
  }

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