import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SingleBeerModel } from '../../../models/single-beer.model';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-search-beers',
  templateUrl: './search-beers.component.html',
  styleUrls: ['./search-beers.component.css'],
  providers: [ApiRequestsService],
})
export class SearchBeersComponent implements OnInit, OnDestroy {
  constructor(
    protected apiRequestsService: ApiRequestsService,
    protected storageService: StorageService
  ) {
    this.subs = new Subscription();
  }

  searchInput: FormControl;
  subs: Subscription;

  ngOnInit(): void {
    this.searchInput = new FormControl();
    this.searchInput.valueChanges.subscribe((r) => this.onInputSearchText(r));
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  onInputSearchText(str: string) {
    console.log(str);
    this.subs.add(
      this.apiRequestsService.searchBeerByString(str).subscribe((res) => {
        console.log('beers: ', res);
        this.storageService.beerPool.next(
          res.map((r) => new SingleBeerModel(r))
        );
      })
    );
  }
}
