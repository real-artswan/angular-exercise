import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Car } from '../data-storage.service';

@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.sass']
})
export class CarSelectorComponent implements ControlValueAccessor {

  @Input()
  carsList: Car[] = [];

  value: Car | null = null;

  constructor(@Self() @Optional() public control: NgControl) {
    control.valueAccessor = this;
  }

  private onChange = (value: Car) => {};
	private onTouched = () => {};

  writeValue(outsideValue: Car): void {
		this.value = outsideValue;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void { 
		this.onTouched = fn;
	}

	updateValue(insideValue: Car) {
		this.value = insideValue;
		if (this.onChange)
			this.onChange(insideValue);
		if (this.onTouched)
			this.onTouched();
	}
}
