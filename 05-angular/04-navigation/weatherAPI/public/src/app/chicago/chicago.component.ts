import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
   }

  ngOnInit() {

    this.appComponent.getWeatherFromService(this,'chicago');

  }

}
