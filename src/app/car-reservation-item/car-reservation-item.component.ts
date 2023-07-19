import { Component, Input } from '@angular/core';
import { CarReservation } from '../data-storage.service';

@Component({
  selector: 'app-car-reservation-item',
  templateUrl: './car-reservation-item.component.html',
  styleUrls: ['./car-reservation-item.component.sass']
})
export class CarReservationItemComponent {

  @Input()
  reservation: CarReservation | null = null;
}
