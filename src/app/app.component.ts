import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'corona-meter';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setDefaultTheme();
  }
}
