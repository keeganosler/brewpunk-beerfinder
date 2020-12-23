import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FilterPropertiesModel } from '../models/filter-properties.model';
import { SingleBeerModel } from '../models/single-beer.model';

@Injectable()
export class ApiRequestsService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}
  starterString: string = `${this.apiUrl}/beers?`;

  fetchRandomBeer() {
    return this.http.get<SingleBeerModel[]>(`${this.apiUrl}/beers/random`);
  }

  searchBeerByString(str: string) {
    return this.http.get<SingleBeerModel[]>(
      `${this.apiUrl}/beers?beer_name=${str}`
    );
  }

  getFilteredBeers(filterProps: FilterPropertiesModel) {
    let str = `${this.apiUrl}/beers?`;
    let i: number = 0;
    for (let prop in filterProps) {
      if (i > 0) {
        str = str + `&` + `${prop}=${filterProps[prop]}`;
      } else {
        str = str + `${prop}=${filterProps[prop]}`;
      }
      console.log('str: ', str);
      i++;
    }
    return this.http.get<SingleBeerModel[]>(str);
  }
}
