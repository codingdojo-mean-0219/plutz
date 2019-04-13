import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
  }

 ngOnInit() {

   this.appComponent.getWeatherFromService(this,'district of columbia');

 }

}