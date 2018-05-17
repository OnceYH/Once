import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserTasksPage } from './user-tasks';

@NgModule({
  declarations: [
    UserTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(UserTasksPage),
  ],
})
export class UserTasksPageModule {}
