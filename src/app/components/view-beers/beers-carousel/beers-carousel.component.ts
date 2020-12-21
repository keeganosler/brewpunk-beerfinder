import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleBeerModel } from '../../../models/single-beer.model';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-beers-carousel',
  templateUrl: './beers-carousel.component.html',
  styleUrls: ['./beers-carousel.component.css'],
})
export class BeersCarouselComponent implements OnInit {
  subs: Subscription;
  constructor(protected storageService: StorageService) {
    this.subs = new Subscription();
  }
  beerPool: SingleBeerModel[];
  currentBeer: SingleBeerModel;
  startIndex: number = 0;

  ngOnInit(): void {
    this.subs.add(
      this.storageService.beerPool.subscribe((res) => {
        //console.log('beer pool: ', res);
        this.beerPool = res;
      })
    );
    this.subs.add(
      this.storageService.currentBeer.subscribe((res) => {
        this.currentBeer = res;
      })
    );
  }

  get carouselBeers() {
    // console.log(
    //   'current beer: ',
    //   this.currentBeer,
    //   this.beerPool?.slice(this.startIndex, this.startIndex + 8)[0]
    // );
    return this.beerPool?.slice(this.startIndex, this.startIndex + 8);
  }
}
