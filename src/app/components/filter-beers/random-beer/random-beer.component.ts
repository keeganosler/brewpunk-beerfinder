import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../../../services/api-requests.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css'],
  providers: [ApiRequestsService]
})
export class RandomBeerComponent implements OnInit {

  constructor(public apiRequestsService: ApiRequestsService) { }

  ngOnInit(): void {

  }

  getRandomBeer() {
    this.apiRequestsService.fetchRandomBeer().subscribe(res => {
      console.log('random beer: ', res);
    });
  }

}
