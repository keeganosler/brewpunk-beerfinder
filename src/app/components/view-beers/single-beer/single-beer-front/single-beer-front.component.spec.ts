import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBeerFrontComponent } from './single-beer-front.component';

describe('SingleBeerFrontComponent', () => {
  let component: SingleBeerFrontComponent;
  let fixture: ComponentFixture<SingleBeerFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBeerFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBeerFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
