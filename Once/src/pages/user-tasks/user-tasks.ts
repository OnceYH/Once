import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AsanaServiceProvider } from "../../providers/asana-service";

/**
 * Generated class for the UserTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-tasks',
  templateUrl: 'user-tasks.html',
})
export class UserTasksPage implements OnInit {

  workspaceId: any;
  userId: any;
  isLoading: boolean = true;
  taskData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public asanaServiceProvider: AsanaServiceProvider) {
    this.workspaceId  = navParams.get('workspaceId');
    this.userId       = navParams.get('userId');
  }

  ngOnInit(): void {
    var temp = this;
    setTimeout(function() {
      temp.displayData(temp.workspaceId, temp.userId).then(result => {
        temp.isLoading = false;
      });
    }, 1500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserTasksPage');
  }

  async displayData (workspaceId, userId) {
    await this.asanaServiceProvider.getUserTasks(workspaceId, userId)
    .then(data => {
      this.taskData = data;
      console.log(JSON.stringify(this.taskData[0]));
    })
  }

}
