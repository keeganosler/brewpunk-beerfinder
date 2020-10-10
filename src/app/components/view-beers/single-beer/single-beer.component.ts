import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import {Subscription} from 'rxjs';
import {SingleBeerModel} from '../../../models/single-beer.model';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.css']
})
export class SingleBeerComponent implements OnInit, OnDestroy {

  constructor(public storageService: StorageService) { this.subs = new Subscription();}

  subs: Subscription;
  beer: SingleBeerModel;

  ngOnInit(): void {
    this.subs.add(this.storageService.currentBeer.subscribe(b => {
      console.log("in single beer component: ", b)
      this.beer = b
    }))
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe()
    }
  }

}
