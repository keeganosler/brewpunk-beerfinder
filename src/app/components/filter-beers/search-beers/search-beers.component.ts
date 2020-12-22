import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SingleBeerModel } from '../../../models/single-beer.model';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';
import { FilterBeersComponent } from '../filter-beers.component';

@Component({
  selector: 'app-search-beers',
  templateUrl: './search-beers.component.html',
  styleUrls: ['./search-beers.component.css'],
})
export class SearchBeersComponent
  extends FilterBeersComponent
  implements OnInit, OnDestroy {
  constructor(
    public apiRequestsService: ApiRequestsService,
    public storageService: StorageService
  ) {
    super(apiRequestsService, storageService);
  }

  searchInput: FormControl;

  ngOnInit(): void {
    super.ngOnInit();
    this.searchInput = new FormControl();
    this.searchInput.valueChanges.subscribe((r) => this.onInputSearchText(r));
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  onInputSearchText(str: string) {
    console.log(str);
    this.subs.add(
      this.apiRequestsService.searchBeerByString(str).subscribe((res) => {
        console.log('beers: ', res);
        this.storageService.beerPool.next(
          res.map((r) => new SingleBeerModel(r))
        );
        this.storageService.currentBeer.next(
          res.map((r) => new SingleBeerModel(r))[0]
        );
      })
    );
  }
}
