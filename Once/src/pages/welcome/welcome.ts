import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  skip(){
    //send them to the login page
    this.navCtrl.push(LoginPage);
    }

    slideChanged() {
      if (this.slides.isEnd())
        this.skipMsg = "Alright, I got it";
    }
}
