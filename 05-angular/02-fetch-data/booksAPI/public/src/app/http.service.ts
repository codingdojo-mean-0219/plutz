import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { 
    this.getAuthors();
  }
  getAuthors(){
    let tempObservable = this._http.get('/authors');
    tempObservable.subscribe(data=>console.log("Got the authors",data))
  }
}
