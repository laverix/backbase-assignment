import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string;
  weather;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private router: Router) {
  }

  private getHourlyForecastByCity(id) {
    this.weatherService.getHourlyForecastByCity(id).subscribe(response => this.weather = response);
  }

  public goBack() {
    this.router.navigate(['weather']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.getHourlyForecastByCity(this.id);
    });
  }
}
