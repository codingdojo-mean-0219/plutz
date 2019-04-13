import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  constructor(private _httpService: HttpService){
  }
  getWeatherFromService(object,city){
    let observable= this._httpService.getWeather(city);
    observable.subscribe(result=>{
        object['city']= result['name'], 
        object['tempAvg']= result['main']['temp'],
        object['tempMin']=result['main']['temp_min'],
        object['tempMax']=result['main']['temp_max'],
        object['humidity']=result['main']['humidity'],
        object['weather']=result['weather'][0]['description']
      });
    
  }
}
