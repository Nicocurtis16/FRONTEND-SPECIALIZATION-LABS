import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-date-picker',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Import CommonModule for pipes like `date` and directives like *ngIf, *ngFor
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent {
  isDatePickerOpen = false;
  selectedDate: Date = new Date();
  currentMonth: Date = new Date();


  get calendarDates(): Date[] {
    const dates: Date[] = [];
    const startOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1
    );
    const endOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0
    );
    const startDate = new Date(startOfMonth);
    startDate.setDate(startOfMonth.getDate() - startOfMonth.getDay());

    while (startDate <= endOfMonth || startDate.getDay() !== 0) {
      dates.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return dates;
  }

  toggleDatePicker(): void {
    this.isDatePickerOpen = !this.isDatePickerOpen;
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
    this.isDatePickerOpen = false;
  }

  isSelectedDate(date: Date): boolean {
    return (
      date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear()
    );
  }

  isDisabled(date: Date): boolean {
    return date.getMonth() !== this.currentMonth.getMonth();
  }

  previousMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );
  }

  nextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );
  }
}
