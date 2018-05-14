import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('firstName') firstName;
  @ViewChild('lastName') lastName;
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(){
    //create user
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('got data', data);
      //send email verification code
      this.fire.auth.currentUser.sendEmailVerification();
      this.alert('Email verification code sent');
    })
    .catch(error => {
      this.alert(error);
    })
  }
}
