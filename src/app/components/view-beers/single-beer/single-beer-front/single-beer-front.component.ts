import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../../../../services/storage.service';
import {Subscription} from 'rxjs';
import {SingleBeerModel} from '../../../../models/single-beer.model';

@Component({
  selector: 'app-single-beer-front',
  templateUrl: './single-beer-front.component.html',
  styleUrls: ['./single-beer-front.component.css']
})
export class SingleBeerFrontComponent implements OnInit {

  subs: Subscription;

  @Input() beer: SingleBeerModel

  constructor() {}

  ngOnInit(): void {
  }

}
