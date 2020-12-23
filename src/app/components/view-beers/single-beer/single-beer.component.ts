import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleBeerModel } from '../../../models/single-beer.model';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.css'],
})
export class SingleBeerComponent implements OnInit, OnDestroy {
  constructor(public storageService: StorageService) {
    this.subs = new Subscription();
  }

  subs: Subscription;
  beer: SingleBeerModel;

  singleBeerFront: boolean = true;

  ngOnInit(): void {
    this.subs.add(
      this.storageService.currentBeer.subscribe((b) => {
        this.beer = b;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  getCurrentBeer(): SingleBeerModel {
    return this.beer;
  }

  switchBackToFront() {
    this.singleBeerFront = !this.singleBeerFront;
  }
}
