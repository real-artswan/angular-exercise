import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsReservationsListComponent } from './cars-reservations-list.component';

describe('CarsReservationsListComponent', () => {
  let component: CarsReservationsListComponent;
  let fixture: ComponentFixture<CarsReservationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsReservationsListComponent]
    });
    fixture = TestBed.createComponent(CarsReservationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
