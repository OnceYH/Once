import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileData: FirebaseObjectObservable<Profile>
  
  images = ['https://res.cloudinary.com/dvv9fvblr/image/upload/v1515772617/once/images/pages/home/ncglvzybyentngkqgdel.png',
          'https://res.cloudinary.com/dvv9fvblr/image/upload/v1516887286/once/images/pages/home/fqxrje2gz5n86jo4vkw0.jpg',
          'https://res.cloudinary.com/dvv9fvblr/image/upload/v1514891045/once/images/upload_header_images/gabsstgh0ztlvy16vmmz.png',
          'https://res.cloudinary.com/dvv9fvblr/image/upload/v1514900368/once/images/upload_header_images/vwblbv7gijufajuhtagt.jpg',
          'https://res.cloudinary.com/dvv9fvblr/image/upload/v1521544858/once/images/upload_header_images/xbqrl7sn4r0dzcyho5sn.jpg',
          'https://res.cloudinary.com/dvv9fvblr/image/upload/v1514893614/once/images/upload_header_images/z64zzyjxcegfutll0fco.jpg',
          'https://res.cloudinary.com/dvv9fvblr/image/upload/v1516197385/once/images/upload_header_images/km3swiczdrmj7pzh00ft.jpg',
          'https://res.cloudinary.com/dvv9fvblr/image/upload/v1525150028/once/images/upload_header_images/cohpfrbju15wfwtgfyyu.jpg']

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.profileData = this.afDatabase.object(`users/${data.uid}`);
        
      }
    });
  }

}
