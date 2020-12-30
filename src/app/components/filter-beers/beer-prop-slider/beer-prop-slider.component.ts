import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { StorageService } from '../../../services/storage.service';
import { FilterBeersComponent } from '../filter-beers.component';

@Component({
  selector: 'app-beer-prop-slider',
  templateUrl: './beer-prop-slider.component.html',
  styleUrls: ['./beer-prop-slider.component.css'],
})
export class BeerPropSliderComponent
  extends FilterBeersComponent
  implements OnInit, OnDestroy {
  constructor(
    public apiRequestsService: ApiRequestsService,
    public storageService: StorageService
  ) {
    super(apiRequestsService, storageService);
  }

  beerSliderTopLabels = {
    abv: 'How Alcoholic do you like your Beer?',
    ibu: 'How Bitter do you like your Beer?',
    ebc: 'What Colour do you like your Beer?',
  };

  beerSliderLeftLabels = {
    abv: 'Weak',
    ibu: 'Mild',
    ebc: 'Light',
  };

  beerSliderRightLabels = {
    abv: 'Strong',
    ibu: 'Bitter',
    ebc: 'Dark',
  };

  @Input() minimum: number;
  @Input() maximum: number;
  @Input() prop: string;
  @Output() toggleChange = new EventEmitter();
  sliderFormControl: FormControl;

  ngOnInit(): void {
    super.ngOnInit();
    this.sliderFormControl = new FormControl({
      value: undefined,
      disabled: false,
    });
    this.sliderFormControl.valueChanges.subscribe((res) => this.onSlide(res));
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  onSlide(val: number) {
    this.toggleChange.next(val);
  }
}
