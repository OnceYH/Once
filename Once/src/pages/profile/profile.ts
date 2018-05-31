import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
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
   
  profileData: any;
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

  async ngOnInit() {
    await this.afAuth.authState.take(1).subscribe(data => { 
      if (data && data.email && data.uid) {
        this.profileData = this.afDatabase.object(`users/${data.uid}`);
        this.profileData.subscribe(items => {
          this.setProfile(items);
          console.log(this.profile.username);
        });
        //console.log(this.profileData);

        //this.setProfile(this.profileData);
        
      }
    });
  }

  setProfile(data) {
    console.log("inside set profile");
    this.profile = {
      firstName: data["firstName"],
      lastName: data["lastName"],
      username: data["username"],
      Department: data["Department"],
      location: data["location"],
      bio: data["bio"],
      quote: data["quote"],
      dinner: data["dinner"],
      hobby: data["hobby"]
    };
    // this.profile.username = data["username"];
    // this.profile.firstName = data["firstName"];
    // this.profile.lastName = data["lastName"];
    // this.profile.bio = data["bio"];
    // this.profile.location = data["location"];
    // this.profile.quote = data["quote"];
    // this.profile.Department = data["Department"];
    // this.profile.dinner = data["dinner"];
    console.log(JSON.stringify(this.profile));
    //return (this.profile);
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
