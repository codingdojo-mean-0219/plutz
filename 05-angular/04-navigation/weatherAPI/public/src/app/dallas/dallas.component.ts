import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
  }

 ngOnInit() {

   this.appComponent.getWeatherFromService(this,'dallas');

 }

}