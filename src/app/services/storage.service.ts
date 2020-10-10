import { Injectable } from '@angular/core';
import {SingleBeerModel} from '../models/single-beer.model';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  currentBeer = new ReplaySubject<SingleBeerModel>();
  beerPool = new ReplaySubject<SingleBeerModel[]>();
}
