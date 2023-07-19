import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsReservationsListComponent } from './cars-reservations-list/cars-reservations-list.component';
import { CarReservationWizardComponent } from './car-reservation-wizard/car-reservation-wizard.component';
import { DurationSelectorComponent } from './duration-selector/duration-selector.component';
import { CarSelectorComponent } from './car-selector/car-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarReservationItemComponent } from './car-reservation-item/car-reservation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsReservationsListComponent,
    CarReservationWizardComponent,
    DurationSelectorComponent,
    CarSelectorComponent,
    CarReservationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
