import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { 

  }

  createUser(postData){
    return this._http.post('/new',postData);
  }
  populate(name){
    return this._http.post('/user',{name:name});
  }
  process(postData){
    return this._http.post('/process',postData);
  }
}
