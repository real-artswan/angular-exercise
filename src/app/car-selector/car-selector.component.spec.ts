import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSelectorComponent } from './car-selector.component';

describe('CarSelectorComponent', () => {
  let component: CarSelectorComponent;
  let fixture: ComponentFixture<CarSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSelectorComponent]
    });
    fixture = TestBed.createComponent(CarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
