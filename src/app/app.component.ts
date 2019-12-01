import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  optionOnloaded = 'recipes';

  onNavigation(option: string) {
    this.optionOnloaded = option;

  }

  }
