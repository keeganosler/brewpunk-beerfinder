import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';
import { TranslationService } from '../../../services/translation.service';
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
    public storageService: StorageService,
    public translationService: TranslationService
  ) {
    super(apiRequestsService, storageService, translationService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getRandomBeer();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
