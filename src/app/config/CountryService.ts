import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Country from '../models/Country';

@Injectable()
export class CountryService {
  countryUrl: string;
  constructor(private http: HttpClient) {
    this.countryUrl = 'http://localhost:8080';
  }

  public findAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl + '/country');
  }

  public updateCountry(countryCode: string, ban: boolean): Observable<Country[]> {
    return this.http.post<Country[]>(this.countryUrl + '/country/ban/' + countryCode + '/' + ban, {});
  }

}
