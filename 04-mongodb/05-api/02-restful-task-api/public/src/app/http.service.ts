import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) {
    // this.getTasks();
   }
   getTasks(){
    return this._http.get('/tasks');
    
   }

   showTasks(taskID){
     return this._http.get('/tasks/'+taskID);
     
   }

   createTask(postData){
     return this._http.post('/tasks',postData);
   }

   deleteTask(taskID){
     return this._http.delete('/tasks/'+taskID);
   }
   updateTask(taskID,postData){
     return this._http.put('/tasks/'+taskID,postData)
   }
}
