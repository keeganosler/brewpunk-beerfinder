import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SingleBeerModel } from '../../../../models/single-beer.model';

@Component({
  selector: 'app-single-beer-back',
  templateUrl: './single-beer-back.component.html',
  styleUrls: ['./single-beer-back.component.css'],
})
export class SingleBeerBackComponent implements OnInit {
  constructor() {}
  @Input() beer: SingleBeerModel;
  @Output() flipToFront = new EventEmitter();
  @Input() language: string;

  ngOnInit(): void {}
}
