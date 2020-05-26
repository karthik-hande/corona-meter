import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { API_ENDPOINTS } from '../constants';
import { Summary, Country, Global } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private countrySubject = new BehaviorSubject<Country[]>([] as Country[]);
  public countries$ = this.countrySubject.asObservable();

  private LastUpdatedTimeSubject = new BehaviorSubject('');
  public LastUpdatedTime$ = this.LastUpdatedTimeSubject.asObservable();

  private globalSummarySubject = new BehaviorSubject<Global>({} as Global);
  public globalSummary$ = this.globalSummarySubject.asObservable();

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get<Summary>(API_ENDPOINTS.SUMMARY).subscribe(
      (data) => {
        this.countrySubject.next(data.Countries);
        this.globalSummarySubject.next(data.Global);
        this.LastUpdatedTimeSubject.next(data.Date)
      },
      (err) => console.log(err)
    )
  }

}
