import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ninja Gold';
  userName;
  userGold;
  userLog;

  farm="farm";
  casino="casino";
  house="house";
  cave="cave";
  constructor(private _httpService:HttpService){

  }
  ngOnInit(){
      var person=prompt("Please enter your name");
      this.postCreate({name:person});
      // this.populateUser({name:person});
  }

  postCreate(postData){
    let observable = this._httpService.createUser(postData);
    observable.subscribe(data=>{
      console.log("Created our user",data)
      this.userName=data['name'];
      this.userGold=data['gold'];
      this.userLog=data['log'];
    });
  }
  // populateUser(user){
  //   let observable = this._httpService.populate(user);
  //   observable.subscribe(data=>console.log("Grabbed the user",data));
  // }
  postProcess(postData){
    let observable=this._httpService.process(postData);
    observable.subscribe(data=>{
      console.log("Got our data",data)
      this.userName=data[0]['name'];
      this.userGold=data[0]['gold'];
      this.userLog=data[0]['log'];
    });
  }
}
