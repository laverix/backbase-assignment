import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public currentDate = Date.now();
  public cities = {
    'Kiev': {
      now: {},
      forecast: {}
    },
    'Amsterdam': {
      now: {},
      forecast: {}
    },
    'Berlin': {
      now: {},
      forecast: {}
    },
    'Zürich': {
      now: {},
      forecast: {}
    },
    'Tokyo': {
      now: {},
      forecast: {}
    }
  };

  constructor(private weatherService: WeatherService) { }

  private loadCurrentWeatherData(cities) {
    for (const city in cities) {
      if (cities.hasOwnProperty(city)) {
        this.weatherService.getCurrentWeatherByCity(city).subscribe(response => this.cities[city]['now'] = response);
      }
    }
  }

  private loadForecastData(cities) {
    for (const city in cities) {
      if (cities.hasOwnProperty(city)) {
        this.weatherService.getDailyForecastByCity(city).subscribe(response => this.cities[city]['forecast'] = response);
      }
    }
  }

  ngOnInit() {
    this.loadCurrentWeatherData(this.cities);

    this.loadForecastData(this.cities);
  }
}
