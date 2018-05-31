import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


const httpOptions =  {
  headers: new HttpHeaders({
  'Content-Type' : 'application/json',
  'Authorization' : 'Bearer 0/d2b7347ef7d94b08d12d1978c2d44fa0'
  })
};

@Injectable()
export class AsanaServiceProvider {
  apiUrl = "https://app.asana.com/api/1.0/";
  bearer_token = "0/d2b7347ef7d94b08d12d1978c2d44fa0";

  constructor(public http: HttpClient) {
    console.log('Hello AsanaServiceProvider Provider');
  }

  getUserTasks(workspaceId, userId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'tasks?workspace=' + workspaceId + '&assignee=' + userId, httpOptions)
      .subscribe(data => {
        resolve(data["data"]);
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

  getUserData (userId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'users/' + userId, httpOptions)
      .subscribe(data => {
        resolve(data["data"]);
      }, 
      (error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.log("Client-side error " + error.message);
        }
        else {
          console.log("Server-side error " + error.message);
        }
      })
    });
  }

  getUsers () {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'users', httpOptions)
      .subscribe(data => {
        console.log(this.apiUrl + 'users');
        resolve(data["data"]);
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.log("Client-side error " + error.message);
        }
        else {
          console.log("Server-side error " + error.message);
        }
      })
    });
  }
}
