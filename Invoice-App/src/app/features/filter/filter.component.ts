import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import {HeadLineComponent} from "../head-line/head-line.component";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf, HeadLineComponent],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string[]>();  // Add type
   isOpen = false;

  statuses = [
    { label: 'paid', value: 'paid', checked: false },
    { label: 'pending', value: 'pending', checked: false },
    { label: 'draft', value: 'draft', checked: false }
  ];
  isDropdownOpen: boolean = false;
  isChecked: any;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown is now:', this.isOpen);
  }

  onStatusChange(status: any) {
    status.checked = !status.checked;
    const selectedStatuses = this.statuses
      .filter(s => s.checked)
      .map(s => s.value);
    this.filterChange.emit(selectedStatuses);
  }
}
