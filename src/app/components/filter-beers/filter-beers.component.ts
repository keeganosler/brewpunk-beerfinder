import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterPropertiesModel } from '../../models/filter-properties.model';
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

  // filterProperties = {
  //   beer_name: undefined,
  //   abv_gt: undefined,
  //   abv_let: undefined,
  //   ibu_gt: undefined,
  //   ibu_let: undefined,
  //   ebc_gt: undefined,
  //   ebc_let: undefined,
  // };
  filterProperties: FilterPropertiesModel;

  ngOnInit(): void {
    this.subs.add(
      this.storageService.beerPool.subscribe((res) => (this.beerPool = res))
    );
    this.subs.add(
      this.storageService.currentBeer.subscribe(
        (res) => (this.currentBeer = res)
      )
    );
    this.filterProperties = new FilterPropertiesModel();
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  applyAbvFilter(e: number) {
    this.filterProperties.abv_gt = e - 2;
    this.filterProperties.abv_lt = e + 2;
    this.apiRequestsService
      .getFilteredBeers(this.filterProperties)
      .subscribe((res) => {
        this.storageService.beerPool.next(
          res.map((r) => new SingleBeerModel(r))
        );
        this.storageService.currentBeer.next(
          res.map((r) => new SingleBeerModel(r))[0]
        );
      });
  }

  applyIbuFilter(e: any) {
    console.log('ibu: ', e);
  }

  applyEbcFilter(e: any) {
    console.log('ebc: ', e);
  }
}
