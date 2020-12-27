import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';
import { ViewBeersComponent } from '../view-beers.component';

@Component({
  selector: 'app-beers-carousel',
  templateUrl: './beers-carousel.component.html',
  styleUrls: ['./beers-carousel.component.css'],
})
export class BeersCarouselComponent
  extends ViewBeersComponent
  implements OnInit, OnDestroy {
  subs: Subscription;
  constructor(
    public storageService: StorageService,
    public apiRequestsService: ApiRequestsService
  ) {
    super(apiRequestsService, storageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  get carouselBeers() {
    return this.beerPool?.slice(this.startIndex, this.startIndex + 8);
  }
}
