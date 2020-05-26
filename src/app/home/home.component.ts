import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DataService } from '@app/core/services';
import { Summary, Country, Global } from '@app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  globalSummary: Global;
  countries;
  displayedColumns: string[] = ['Country', 'TotalConfirmed', 'NewConfirmed', 'TotalRecovered', 'NewRecovered', 'TotalDeaths', 'NewDeaths', 'ActiveCase'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSummary();
    this.dataService.globalSummary$.subscribe(data => this.globalSummary = data);
    this.dataService.countries$.subscribe((data) => {
      this.countries = new MatTableDataSource(data);
      this.countries.sort = this.sort;
    });
  }

}


