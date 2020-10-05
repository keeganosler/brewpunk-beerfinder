import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersCarouselComponent } from './beers-carousel.component';

describe('BeersCarouselComponent', () => {
  let component: BeersCarouselComponent;
  let fixture: ComponentFixture<BeersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
