import { Component } from '@angular/core';
import { Car, DataStorageService } from '../data-storage.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export enum CarReservationWizardSteps {
  CarSelection = 'car-selection',
  DurationSelection = 'duration-selection',
}

@Component({
  selector: 'app-car-reservation-wizard',
  templateUrl: './car-reservation-wizard.component.html',
  styleUrls: ['./car-reservation-wizard.component.sass']
})
export class CarReservationWizardComponent {

  availableCars$: Observable<Car[]>;

  reservationForm = new FormGroup({
    car: new FormControl<Car | null>(null, [Validators.required]),
    daysAmount: new FormControl<number | null>(1, [Validators.required, Validators.min(1)]),
  })

  wizardSteps = CarReservationWizardSteps;
  currentStep = CarReservationWizardSteps.CarSelection;

  constructor(private dataStorage: DataStorageService, private router: Router) {
    this.availableCars$ = dataStorage.getAvailableCars();
  }

  submitForm() {
    this.dataStorage.addReservation({
      car: this.reservationForm.value.car!,
      daysAmount: this.reservationForm.value.daysAmount!,
    }).subscribe(() => {
      this.closeWizard();
    });
  }

  closeWizard() {
    this.router.navigate(['/']);
  }

  goStepNext() {
    this.currentStep = CarReservationWizardSteps.DurationSelection;
  }

  goStepBack() {
    switch (this.currentStep) {
      case CarReservationWizardSteps.CarSelection:
        this.closeWizard();
        break;
      case CarReservationWizardSteps.DurationSelection:
        this.currentStep = CarReservationWizardSteps.CarSelection;
        break;
    }
  }

  isLastStep() {
    return this.currentStep === CarReservationWizardSteps.DurationSelection;
  }
}
