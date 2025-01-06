
import {
  Component,
  Input,
  forwardRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
// import { IconComponent } from '../icon/icon.component';
// import { ClickOutsideDirective } from '../../../utils/directives/click-outside.directive';

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  id: string;
}

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // IconComponent,
    // ClickOutsideDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder = 'Select date';
  @Input() errorMessage = '';
  @Input() ariaLabel = '';

  @ViewChild('inputElement') inputElement!: ElementRef;

  control = new FormControl({
    value: '',
    disabled: false,
  });
  isOpen = false;
  currentDate = new Date();
  selectedDate: Date | null = null;
  weekDays = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
  calendarDays: CalendarDay[] = [];

  constructor() {
    this.generateCalendar();
  }

  get formattedDate(): string {
    if (!this.selectedDate) return '';
    return this.formatDate(this.selectedDate);
  }

  get currentMonthYear(): string {
    return this.currentDate.toLocaleString('default', {
      month: 'short',
      year: 'numeric',
    });
  }

  get isInvalid(): boolean {
    return Boolean(this.control.touched && this.control.errors);
  }

  closeCalendar(): void {
    this.isOpen = false;
  }

  ngOnInit() {
    this.generateCalendar();
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleCalendar();
    }
  }

  private enableControl(): void {
    this.control.enable();
  }

  private disableControl(): void {
    this.control.disable();
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.disableControl() : this.enableControl();
  }

  toggleCalendar() {
    if (this.control.disabled) return;

    // Generate calendar before opening
    this.generateCalendar();
    this.isOpen = !this.isOpen;

    // Force change detection
    requestAnimationFrame(() => {
      if (this.isOpen) {
        this.scrollToSelectedDate();
      }
    });
  }

  private scrollToSelectedDate(): void {
    if (this.selectedDate) {
      const selectedDay = this.calendarDays.find(
        (day) => day.isSelected && day.isCurrentMonth
      );
      if (selectedDay) {
        const element = document.querySelector('.day-button.selected');
        element?.scrollIntoView({ block: 'center' });
      }
    }
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();

    this.calendarDays = [];

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      const date = prevMonthLastDay - i;
      this.calendarDays.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        id: `prev-${date}`, // Unique ID for tracking
      });
    }

    // Current month days
    const today = new Date();
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      this.calendarDays.push({
        date: i,
        isCurrentMonth: true,
        isToday: this.isSameDate(date, today),
        isSelected: this.selectedDate
          ? this.isSameDate(date, this.selectedDate)
          : false,
        id: `current-${i}`, // Unique ID for tracking
      });
    }

    // Next month days
    const remainingDays = 42 - this.calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      this.calendarDays.push({
        date: i,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        id: `next-${i}`, // Unique ID for tracking
      });
    }
  }

  selectDate(day: CalendarDay) {
    if (!day.isCurrentMonth) return;

    const selectedDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      day.date
    );

    this.selectedDate = selectedDate;
    this.control.setValue(this.formatDate(selectedDate));
    this.onChange(this.formatDate(selectedDate));
    this.isOpen = false;
    this.generateCalendar();
  }

  previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1
    );
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1
    );
    this.generateCalendar();
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  private isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  // ControlValueAccessor implementation
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    if (value) {
      this.selectedDate = new Date(value);
      this.control.setValue(this.formatDate(this.selectedDate));
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
