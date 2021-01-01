import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleBeerModel } from '../../../../models/single-beer.model';

@Component({
  selector: 'app-single-beer-front',
  templateUrl: './single-beer-front.component.html',
  styleUrls: ['./single-beer-front.component.css'],
})
export class SingleBeerFrontComponent implements OnInit {
  subs: Subscription;
  @Input() beer: SingleBeerModel;
  @Input() browserLanguage: string;
  @Output() flipToBack = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
