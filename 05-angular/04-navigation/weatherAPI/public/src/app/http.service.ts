import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}
    
    getWeather(city){
      return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&APPID=409cf1d2ab5f3a4508e0ca3bcf0e5fee")
    }
  }

