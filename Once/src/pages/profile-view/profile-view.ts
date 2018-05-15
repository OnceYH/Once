import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AsanaServiceProvider } from "../../providers/asana-service";
import { UserTasksPage } from '../user-tasks/user-tasks';

@IonicPage()
@Component({
  selector: 'page-profile-view',
  templateUrl: 'profile-view.html',
})
export class ProfileViewPage implements OnInit {


  private isLoading : boolean = true;
  userId: any;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public asanaServiceProvider: AsanaServiceProvider) {
    this.userId = navParams.get('userId');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var temp = this;
    setTimeout(function() {
      temp.DisplayData(temp.userId).then(result => {
        temp.isLoading = false;
      });
    }, 1500);
  }

  ViewTasks(user) {
    this.navCtrl.push(UserTasksPage, 
      {'workspaceId' : user.workspaces[0].id, 'userId': user.id });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileViewPage');
  }

  async DisplayData(userId) {
    await this.asanaServiceProvider.getUserData(userId)
    .then(data => {
      this.user = data;
    })
  }

}
