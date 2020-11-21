import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SingleBeerModel } from '../models/single-beer.model';

@Injectable()
export class ApiRequestsService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  fetchRandomBeer() {
    return this.http.get<SingleBeerModel[]>(`${this.apiUrl}/beers/random`);
  }

  searchBeerByString(str: string) {
    return this.http.get<SingleBeerModel[]>(
      `${this.apiUrl}/beers?beer_name=${str}`
    );
  }
}
