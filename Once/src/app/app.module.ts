import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AsanaAuthProvider } from "../providers/asana-auth"; 
import { AsanaServiceProvider } from "../providers/asana-service";
//import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';

//angular and firebase auth imports
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//page imports
import { LoginPage } from '../pages/login/login';
import { TasksPage } from '../pages/tasks/tasks';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { ProfileViewPage } from "../pages/profile-view/profile-view";
//import { UserTasksPage } from "../pages/user-tasks/user-tasks";
import { SearchPage } from "../pages/search/search";
import { CalendarPage } from '../pages/calendar/calendar';
import { TaskModalPage } from '../pages/task-modal/task-modal';
import { NgCalendarModule } from 'ionic2-calendar';
import { StatsPage } from '../pages/stats/stats';
import { UserTasksPage } from '../pages/user-tasks/user-tasks';
import { DataProvider } from '../providers/data/data';
import { ProfilePage } from '../pages/profile/profile';
import { Camera } from '@ionic-native/camera';
import { ImageProvider } from '../providers/image/image';


const firebaseAuth = {
  apiKey: "AIzaSyCDjeIECJNKIvj30AUNANMCucrXBdWK3hk",
    authDomain: "onceapp2018.firebaseapp.com",
    databaseURL: "https://onceapp2018.firebaseio.com",
    projectId: "onceapp2018",
    storageBucket: "onceapp2018.appspot.com",
    messagingSenderId: "470210467297"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TasksPage,
    WelcomePage,
    RegisterPage,
    UserTasksPage,
    ProfileViewPage,
    SearchPage,
    TaskModalPage,
    CalendarPage,
    StatsPage,
    ProfilePage

  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TasksPage,
    WelcomePage,
    RegisterPage,
    UserTasksPage,
    ProfileViewPage,
    SearchPage,
    CalendarPage,
    TaskModalPage,
    StatsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AsanaAuthProvider,
    AsanaServiceProvider,
    DataProvider,
    Camera,
    ImageProvider
  ]
})
export class AppModule {}
