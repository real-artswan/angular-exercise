import { Component, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-duration-selector',
  templateUrl: './duration-selector.component.html',
  styleUrls: ['./duration-selector.component.sass']
})
export class DurationSelectorComponent implements ControlValueAccessor {
  value: number | null = null;

  constructor(@Self() @Optional() public control: NgControl) {
    control.valueAccessor = this;
  }

  private onChange = (value: number) => {};
	private onTouched = () => {};

  writeValue(outsideValue: number): void {
		this.value = outsideValue;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void { 
		this.onTouched = fn;
	}

	updateValue(insideValue: number) {
		this.value = insideValue;
		if (this.onChange)
			this.onChange(insideValue);
		if (this.onTouched)
			this.onTouched();
	}

}
