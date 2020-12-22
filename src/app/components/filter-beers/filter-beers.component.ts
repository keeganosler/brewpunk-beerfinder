import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleBeerModel } from '../../models/single-beer.model';
import { ApiRequestsService } from '../../services/api-requests.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-filter-beers',
  templateUrl: './filter-beers.component.html',
  styleUrls: ['./filter-beers.component.css'],
  providers: [ApiRequestsService],
})
export class FilterBeersComponent implements OnInit, OnDestroy {
  subs: Subscription;
  constructor(
    public apiRequestsService: ApiRequestsService,
    public storageService: StorageService
  ) {
    this.subs = new Subscription();
  }
  beerPool: SingleBeerModel[];
  currentBeer: SingleBeerModel;

  ngOnInit(): void {
    this.subs.add(
      this.storageService.beerPool.subscribe((res) => (this.beerPool = res))
    );
    this.subs.add(
      this.storageService.currentBeer.subscribe(
        (res) => (this.currentBeer = res)
      )
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
