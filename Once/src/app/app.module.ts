import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AsanaAuthProvider } from "../providers/asana-auth"; 
import { AsanaServiceProvider } from "../providers/asana-service";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';

//angular and firebase auth imports
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//page imports
import { LoginPage } from '../pages/login/login';
import { TasksPage } from '../pages/tasks/tasks';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
<<<<<<< HEAD
import { ProfileViewPage } from "../pages/profile-view/profile-view";
import { UserTasksPage } from "../pages/user-tasks/user-tasks";
import { SearchPage } from "../pages/search/search";
=======
import { CalendarPage } from '../pages/calendar/calendar';
import { TaskModalPage } from '../pages/task-modal/task-modal';
import { NgCalendarModule } from 'ionic2-calendar';
import { StatsPage } from '../pages/stats/stats';
>>>>>>> 33f2494e9b7026143325ab4df44b38ceddbaf7e1

const firebaseAuth = {
  apiKey: "AIzaSyCM5fQFSC5TGoUNPipLctAI7zdHhZ-cgfQ",
  authDomain: "once-88da9.firebaseapp.com",
  databaseURL: "https://once-88da9.firebaseio.com",
  projectId: "once-88da9",
  storageBucket: "once-88da9.appspot.com",
  messagingSenderId: "266428935769"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TasksPage,
    WelcomePage,
    RegisterPage,
<<<<<<< HEAD
    UserTasksPage,
    ProfileViewPage,
    SearchPage,
=======
    TaskModalPage,
    CalendarPage,
    StatsPage
>>>>>>> 33f2494e9b7026143325ab4df44b38ceddbaf7e1
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    AngularFireDatabaseModule
>>>>>>> 33f2494e9b7026143325ab4df44b38ceddbaf7e1
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TasksPage,
    WelcomePage,
    RegisterPage,
<<<<<<< HEAD
    UserTasksPage,
    ProfileViewPage,
    SearchPage,
=======
    CalendarPage,
    TaskModalPage,
    StatsPage
>>>>>>> 33f2494e9b7026143325ab4df44b38ceddbaf7e1
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
