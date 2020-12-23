import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPropSliderComponent } from './beer-prop-slider.component';

describe('BeerPropSliderComponent', () => {
  let component: BeerPropSliderComponent;
  let fixture: ComponentFixture<BeerPropSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerPropSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPropSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
