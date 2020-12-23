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

  @Input() minimum: number;
  @Input() maximum: number;
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
