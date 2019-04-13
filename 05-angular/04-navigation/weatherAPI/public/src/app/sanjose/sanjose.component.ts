import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
  }

 ngOnInit() {

   this.appComponent.getWeatherFromService(this,'san jose');

 }

}