import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';
import { TranslationService } from '../../../services/translation.service';
import { ViewBeersComponent } from '../view-beers.component';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css'],
})
export class BeersListComponent
  extends ViewBeersComponent
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
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
