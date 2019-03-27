import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title="Restful Tasks";
  tasks=[];
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.getTasksFromService();

  }
  getTasksFromService(){
    let observable =this._httpService.getTasks();
    observable.subscribe(data=>{
      console.log("Got the Tasks!",data)
      for (const task in data) {
        this.tasks.push(data[task]);
      }
    })
    
  }
}
