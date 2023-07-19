import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsReservationsListComponent } from './cars-reservations-list/cars-reservations-list.component';
import { CarReservationWizardComponent } from './car-reservation-wizard/car-reservation-wizard.component';

const routes: Routes = [
  { path: 'reservations-list', component: CarsReservationsListComponent },
  { path: '', redirectTo: '/reservations-list', pathMatch: 'full' },
  { path: 'reservation-wizard', component: CarReservationWizardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
