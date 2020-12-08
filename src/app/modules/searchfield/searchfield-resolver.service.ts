import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CountryWeatherService } from '@modules/searchfield/country-weather.service';
import { CountryWeather } from '@modules/searchfield/CountryWeather';

@Injectable({
  providedIn: 'root'
})
export class SearchfieldResolverService implements Resolve<Observable<CountryWeather[] | string>> {

  constructor(private countryWeatherService: CountryWeatherService) {}

  resolve(
    activatedRoute: ActivatedRouteSnapshot
  ): Observable<CountryWeather[] | string> {
    return this.countryWeatherService
    .getCountryWeather$(activatedRoute.params.countryQuery)
    .pipe(catchError((error: string) => of(error)));
  }
}
