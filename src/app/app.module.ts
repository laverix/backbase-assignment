import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import {AppRoutingModule} from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import {WeatherService} from './weather.service';
import {HttpModule} from '@angular/http';
import { KeysPipe } from './keys.pipe';
import { OverviewComponent } from './overview/overview.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    WeatherComponent,
    KeysPipe,
    OverviewComponent,
    ForecastComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
