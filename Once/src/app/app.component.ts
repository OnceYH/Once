import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, ToastController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TasksPage } from '../pages/tasks/tasks';
import { WelcomePage } from '../pages/welcome/welcome';
import { SearchPage } from "../pages/search/search";
import { CalendarPage } from '../pages/calendar/calendar';
import { StatsPage } from '../pages/stats/stats';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileViewPage } from '../pages/profile-view/profile-view';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../models/profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  profileData: FirebaseObjectObservable<Profile>
  pages: Array<{title: string, component: any}>;

  constructor(
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    private afAuth: AngularFireAuth, 
    public menuCtrl: MenuController,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'TEAM', component: SearchPage},
      { title: 'STATS', component: StatsPage},
      { title: 'TASKS', component: TasksPage},
      { title: 'CALENDAR', component: CalendarPage},
    ];

  }

  ngOnInit() {

  }

  gotoProfile() {
    this.nav.setRoot(ProfileViewPage);
  }

  logout() {    
    this.nav.setRoot(LoginPage);
    this.afAuth.auth.signOut();
    this.nav.popAll();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.afAuth.authState.take(1).subscribe(data => {
        if (data && data.email && data.uid) {
          this.profileData = this.afDatabase.object(`users/${data.uid}`);
        }
        else {
          //
        }
      })
    });
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}