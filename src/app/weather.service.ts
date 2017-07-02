import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

  constructor(private http: Http) {
  }

  getCurrentWeatherByCity(city) {
    return this.http
      .get(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric`)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Hey! Something went wrong'));
  }

  getDailyForecastByCity(city) {
    return this.http
      .get(`//api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric`)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Hey! Something went wrong'));
  }

  getHourlyForecastByCity(city) {
    return this.http
      .get(`//api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric`)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Hey! Something went wrong'));
  }
}
