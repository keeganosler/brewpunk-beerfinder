import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBeersComponent } from './view-beers.component';

describe('ViewBeersComponent', () => {
  let component: ViewBeersComponent;
  let fixture: ComponentFixture<ViewBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
