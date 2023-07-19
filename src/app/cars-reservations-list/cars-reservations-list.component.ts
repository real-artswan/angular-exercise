import { Component } from '@angular/core';
import { CarReservation, DataStorageService } from '../data-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars-reservations-list',
  templateUrl: './cars-reservations-list.component.html',
  styleUrls: ['./cars-reservations-list.component.sass']
})
export class CarsReservationsListComponent {
  reservations$: Observable<CarReservation[]>;

  constructor(dataStorage: DataStorageService) {
    this.reservations$ = dataStorage.getReservations();
  }
}
