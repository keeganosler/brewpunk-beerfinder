import { Component, OnDestroy, OnInit } from '@angular/core';
import { SingleBeerModel } from '../../../models/single-beer.model';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';
import { FilterBeersComponent } from '../filter-beers.component';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css'],
  providers: [ApiRequestsService],
})
export class RandomBeerComponent
  extends FilterBeersComponent
  implements OnInit, OnDestroy {
  constructor(
    public apiRequestsService: ApiRequestsService,
    public storageService: StorageService
  ) {
    super(apiRequestsService, storageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getRandomBeer() {
    this.subs.add(
      this.apiRequestsService.fetchRandomBeer().subscribe((res) => {
        console.log('random beer: ', res);
        this.storageService.currentBeer.next(
          res.map((r) => new SingleBeerModel(r))[0]
        );
      })
    );
  }
}
