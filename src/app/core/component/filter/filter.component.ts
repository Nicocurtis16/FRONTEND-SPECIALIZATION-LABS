import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { HeadLineComponent } from "../../../shared/component/head-line/head-line.component";
import { Store } from '@ngrx/store';
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { invoiceAction } from "../../../shared/state/actions/invoice.action";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, HeadLineComponent, IconComponent],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string[]>();
  isDropdownOpen: boolean = false;

  statuses = [
    { label: 'Paid', value: 'paid', checked: false },
    { label: 'Pending', value: 'pending', checked: false },
    { label: 'Draft', value: 'draft', checked: false }
  ];

  constructor(private store: Store) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown is now:', this.isDropdownOpen);
  }

  onStatusChange(status: any) {
    status.checked = !status.checked;
    const selectedStatuses = this.statuses
      .filter(s => s.checked)
      .map(s => s.value);

    // Dispatch action to update filter in the store
    this.store.dispatch(invoiceAction.updateFilter({ filters: selectedStatuses }));
  }

  // Close dropdown when clicking outside of it
  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const dropdownElement = document.querySelector('.dropdown-container');
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }
}
