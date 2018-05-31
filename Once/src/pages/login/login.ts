import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public type = 'password';
  public showPass = false;
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController ,private fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = 'text';
    }
    else {
      this.type= 'password';
    }
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    //create new session with user details
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
    .then (data => {
      //just checking the data
      console.log('got some data: ', data);

      //this is for checking if email is verified before logging users in
      var emailVer = this.fire.auth.currentUser.emailVerified;
      if (emailVer == true)
        this.navCtrl.setRoot(HomePage, data);
      else
        this.alert('Email ' + this.user.value + ' is not verified!');
    })
    .catch (error => {
      console.log('got an error ', error);
      this.alert(error);
    })
    //this.navCtrl.setRoot(HomePage);
  }

  registerUser()
  {
    this.navCtrl.push(RegisterPage);
  }
}
