import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class UsersProvider {

  profileData: FirebaseListObservable<any[]>

  constructor(private afDatabase: AngularFireDatabase) {
    this.profileData = this.afDatabase.list(`/users`);
  }

  getUsers(){
    return this.profileData;
  }
}