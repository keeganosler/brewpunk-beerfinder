import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SingleBeerModel } from '../../../../models/single-beer.model';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-single-beer-back',
  templateUrl: './single-beer-back.component.html',
  styleUrls: ['./single-beer-back.component.css'],
})
export class SingleBeerBackComponent implements OnInit {
  constructor() {}
  @Input() beer: SingleBeerModel;
  @Output() flipToFront = new EventEmitter();

  ngOnInit(): void {}
}
