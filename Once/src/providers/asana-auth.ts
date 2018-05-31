import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AsanaAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions =  {
  headers: new HttpHeaders(
    { 'Content-Type' : 'application/json',
  })
  };

@Injectable()
export class AsanaAuthProvider {

  authUrl= 'https://app.asana.com/-/oauth_authorize?response_type=code&client_id=643070611264719&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&state=200';


  constructor(public http: HttpClient) {
    console.log('Hello AsanaAuthProvider Provider');
  }

//REDIRECT URL MUST BE CHANGED WHEN SERVER URL CHANGES!
  authoriseUser() {
    return new Promise(resolve => {
      this.http.get(this.authUrl, httpOptions)
      .subscribe(data => {
        console.log("Auth data: " + data);
        resolve(data);
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.log("Client-side error " + error.message);
        }
        else {
          console.log("Server-side error " + error.message);
        }
      });
    });
  }

}
