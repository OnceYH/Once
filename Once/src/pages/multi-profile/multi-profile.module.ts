import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiProfilePage } from './multi-profile';

@NgModule({
  declarations: [
    MultiProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MultiProfilePage),
  ],
})
export class MultiProfilePageModule {}
