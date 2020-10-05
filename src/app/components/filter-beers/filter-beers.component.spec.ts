import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBeersComponent } from './filter-beers.component';

describe('FilterBeersComponent', () => {
  let component: FilterBeersComponent;
  let fixture: ComponentFixture<FilterBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
