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

  public showPass = false;
  public showPassCon = false;
  public typeCon = "password";
  public type = "password";
  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('confirmpassword') confirmpass;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showPasswordCon() {
    this.showPassCon = !this.showPassCon;

    if (this.showPassCon) {
      this.typeCon = "text";
    }
    else {
      this.typeCon = "password";
    }
  }

  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = "text";
    }
    else {
      this.type= "password";
    }
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
    if (this.password === this.confirmpass) {
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
    else {
      this.alert("Passwords do not match");
    }
  }
}
