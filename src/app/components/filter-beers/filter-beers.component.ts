import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterPropertiesModel } from '../../models/filter-properties.model';
import { SingleBeerModel } from '../../models/single-beer.model';
import { ApiRequestsService } from '../../services/api-requests.service';
import { StorageService } from '../../services/storage.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-filter-beers',
  templateUrl: './filter-beers.component.html',
  styleUrls: ['./filter-beers.component.css'],
  providers: [ApiRequestsService],
})
export class FilterBeersComponent implements OnInit, OnDestroy {
  language: string;
  subs: Subscription;
  constructor(
    public apiRequestsService: ApiRequestsService,
    public storageService: StorageService,
    public translationService: TranslationService
  ) {
    this.subs = new Subscription();
    this.filterProperties = new FilterPropertiesModel();
  }
  beerPool: SingleBeerModel[];
  currentBeer: SingleBeerModel;

  filterProperties: FilterPropertiesModel;

  ngOnInit(): void {
    console.log('test');
    this.subs.add(
      this.storageService.beerPool.subscribe((res) => (this.beerPool = res))
    );
    this.subs.add(
      this.storageService.currentBeer.subscribe(
        (res) => (this.currentBeer = res)
      )
    );
    this.subs.add(
      this.translationService.language.subscribe((res) => (this.language = res))
    );
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
    this.filterProperties.ibu_gt = e - 2;
    this.filterProperties.ibu_lt = e + 2;
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

  applyEbcFilter(e: any) {
    this.filterProperties.ebc_gt = e - 2;
    this.filterProperties.ebc_lt = e + 2;
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

  getRandomBeer() {
    this.subs.add(
      this.apiRequestsService.fetchRandomBeer().subscribe((res) => {
        this.storageService.currentBeer.next(
          res.map((r) => new SingleBeerModel(r))[0]
        );
        this.storageService.beerPool.next(
          res.map((r) => new SingleBeerModel(r))
        );
      })
    );
  }
}
