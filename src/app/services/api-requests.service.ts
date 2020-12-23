import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FilterPropertiesModel } from '../models/filter-properties.model';
import { SingleBeerModel } from '../models/single-beer.model';

@Injectable()
export class ApiRequestsService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  fetchRandomBeer() {
    return this.http.get<SingleBeerModel[]>(`${this.apiUrl}/beers/random`);
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
      i++;
    }
    console.log('str: ', str);
    return this.http.get<SingleBeerModel[]>(str);
  }
}
