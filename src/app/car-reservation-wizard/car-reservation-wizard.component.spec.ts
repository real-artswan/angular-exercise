import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReservationWizardComponent } from './car-reservation-wizard.component';

describe('CarReservationWizardComponent', () => {
  let component: CarReservationWizardComponent;
  let fixture: ComponentFixture<CarReservationWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarReservationWizardComponent]
    });
    fixture = TestBed.createComponent(CarReservationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
