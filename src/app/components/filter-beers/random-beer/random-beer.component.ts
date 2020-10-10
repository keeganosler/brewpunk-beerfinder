import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../../../services/api-requests.service';
import {StorageService} from '../../../services/storage.service';
import {SingleBeerModel} from '../../../models/single-beer.model';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css'],
  providers: [ApiRequestsService]
})
export class RandomBeerComponent implements OnInit {

  constructor(public apiRequestsService: ApiRequestsService, public storageService: StorageService) { }

  ngOnInit(): void {

  }

  getRandomBeer() {
    this.apiRequestsService.fetchRandomBeer().subscribe(res => {
      console.log('random beer: ', res);
      this.storageService.currentBeer.next(res.map(r => new SingleBeerModel(r))[0]);
    });
  }

}
