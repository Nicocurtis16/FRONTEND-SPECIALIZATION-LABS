import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  @Output() dateChange = new EventEmitter<string>();

  selectedDate: string = ''; // You can set a default date here

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    this.dateChange.emit(this.selectedDate); // Emit the new date value
  }
  openDatePicker() {
    const inputElement = document.querySelector('input[type="date"]') as HTMLInputElement;
    inputElement?.focus(); // Focus the input to open the date picker
  }

}
