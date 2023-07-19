import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

export type Car = {
  modelName: string;
};

export type CarReservation = {
  car: Car;
  daysAmount: number;
};

/**
 * Simple service to emulate network API calls
 */
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  _reservations: CarReservation[] = [];

  constructor() { }

  getAvailableCars(): Observable<Car[]> {
    return from([[
      { modelName: "Telsa Model S" },
      { modelName: "Tesla Model 3" },
      { modelName: "Tesla Model X" },
      { modelName: "Tesla Model Y" },
    ]]);
  }

  getReservations(): Observable<CarReservation[]> {
    return from([this._reservations]);
  }

  addReservation(reservation: CarReservation): Observable<void> {
    this._reservations.push(reservation);
    return new Observable(subscriber => {
      subscriber.next();
      subscriber.complete();
    });
  }

}
