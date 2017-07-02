import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GreetingsComponent} from 'app/greetings/greetings.component';
import {WeatherComponent} from './weather/weather.component';
import {DetailsComponent} from './details/details.component';


const appRoutes: Routes = [
  {path: 'greetings', component: GreetingsComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '', redirectTo: '/greetings', pathMatch: 'full'},
  {path: '**', component: GreetingsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
