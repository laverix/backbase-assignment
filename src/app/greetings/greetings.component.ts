import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor(private router: Router) {
  }

  private redirectToWeatherComponent() {
    this.router.navigate(['weather']);
  }

  ngOnInit() {
    setTimeout(() => {
      this.redirectToWeatherComponent();
    }, 1500)
  }
}
