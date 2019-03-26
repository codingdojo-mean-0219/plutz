import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) {
    this.getTasks();
   }
   getTasks(){
     let tempObservable = this._http.get('/tasks');
     tempObservable.subscribe(data=>console.log("Got the tasks",data));
   }

   updateTasks(taskID){
     let tempObservable=this._http.get('/tasks/'+taskID);
     tempObservable.subscribe(data=>console.log("Got task",data));
   }
}
