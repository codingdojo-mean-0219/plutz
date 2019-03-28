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
  task;
  newTask:any;
  postData:any;
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.newTask={
      title:"",
      description:""
    }

  }
  getTasksFromService(){
    this.tasks=[];
    let observable =this._httpService.getTasks();
    observable.subscribe(data=>{
      console.log("Got the Tasks!",data)
      for (const task in data) {
        this.tasks.push(data[task]);
      }
    })
    
    }
    showTask(id){
      let observable = this._httpService.showTasks(id);
      observable.subscribe(data=>{
        console.log("Got the task",data);
        this.task=data;
        this.postData=data[0];
      })
    }

    create(){
      let observable = this._httpService.createTask(this.newTask);
      observable.subscribe(data=>{
        console.log("Created new task",data);
        this.newTask={};
        this.getTasksFromService();
      })
    }

    update(id){
      let observable = this._httpService.updateTask(id,this.postData);
      observable.subscribe(data=>{
        console.log("Updated task",data);
        this.getTasksFromService();
      })
    }
    deleteTask(id){
      let observable = this._httpService.deleteTask(id);
      observable.subscribe(data=>{
        console.log("Deleted Task",data);
        this.getTasksFromService();
        this.task=undefined;
      })
    }
  }
