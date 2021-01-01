import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleBeerModel } from '../../models/single-beer.model';
import { ApiRequestsService } from '../../services/api-requests.service';
import { StorageService } from '../../services/storage.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-view-beers',
  templateUrl: './view-beers.component.html',
  styleUrls: ['./view-beers.component.css'],
  providers: [ApiRequestsService],
})
export class ViewBeersComponent implements OnInit, OnDestroy {
  subs: Subscription;
  constructor(
    public apiRequestsService: ApiRequestsService,
    public storageService: StorageService,
    public translationService: TranslationService
  ) {
    this.subs = new Subscription();
  }
  beerPool: SingleBeerModel[];
  currentBeer: SingleBeerModel;
  startIndex: number = 0;
  currentBeerIndex: number = 0;
  browserLanguage: string;

  ngOnInit(): void {
    this.subs.add(
      this.storageService.beerPool.subscribe((res) => {
        this.beerPool = res;
      })
    );
    this.subs.add(
      this.storageService.currentBeer.subscribe((res) => {
        this.currentBeer = res;
      })
    );
    this.subs.add(
      this.translationService.browserLanguage.subscribe(
        (res) => (this.browserLanguage = res)
      )
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  onPreviousBeer() {
    if (this.currentBeerIndex === 0) {
      this.currentBeerIndex = this.beerPool.length - 1;
    } else {
      this.currentBeerIndex--;
    }
    this.storageService.currentBeer.next(this.beerPool[this.currentBeerIndex]);
  }

  onNextBeer() {
    if (this.currentBeerIndex === this.beerPool.length - 1) {
      this.currentBeerIndex = 0;
    } else {
      this.currentBeerIndex++;
    }
    this.storageService.currentBeer.next(this.beerPool[this.currentBeerIndex]);
  }

  onMoveCarouselBack() {
    if (this.startIndex === 0) {
      this.startIndex = this.beerPool.length - 1;
    } else {
      this.startIndex--;
    }
  }

  onMoveCarouselForward() {
    if (this.startIndex === this.beerPool.length - 1) {
      this.startIndex = 0;
    } else {
      this.startIndex++;
    }
  }
}
