import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/core/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
