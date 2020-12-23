import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleBeerModel } from '../../../models/single-beer.model';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';
import { ViewBeersComponent } from '../view-beers.component';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.css'],
})
export class SingleBeerComponent
  extends ViewBeersComponent
  implements OnInit, OnDestroy {
  constructor(
    public apiRequestsService: ApiRequestsService,
    storageService: StorageService
  ) {
    super(apiRequestsService, storageService);
  }

  subs: Subscription;

  singleBeerFront: boolean = true;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getCurrentBeer(): SingleBeerModel {
    return this.currentBeer;
  }

  switchBackToFront() {
    this.singleBeerFront = !this.singleBeerFront;
  }
}
