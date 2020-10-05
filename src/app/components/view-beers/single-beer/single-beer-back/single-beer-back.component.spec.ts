import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBeerBackComponent } from './single-beer-back.component';

describe('SingleBeerBackComponent', () => {
  let component: SingleBeerBackComponent;
  let fixture: ComponentFixture<SingleBeerBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBeerBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBeerBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
