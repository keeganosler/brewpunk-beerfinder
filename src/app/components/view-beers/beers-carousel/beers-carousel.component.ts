import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  ngOnInit(): void {
    this.subs.add(
      this.storageService.beerPool.subscribe((res) => {
        console.log('beer pool: ', res);
      })
    );
  }
}
