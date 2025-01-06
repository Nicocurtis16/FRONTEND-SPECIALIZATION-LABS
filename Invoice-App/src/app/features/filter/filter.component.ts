import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import {HeadLineComponent} from "../head-line/head-line.component";
import { Store } from '@ngrx/store';
import { invoiceAction } from '../../state/actions/invoice.action';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf, HeadLineComponent],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string[]>();
  isOpen = false;

  statuses = [
    { label: 'paid', value: 'paid', checked: false },
    { label: 'pending', value: 'pending', checked: false },
    { label: 'draft', value: 'draft', checked: false }
  ];

  constructor(private store: Store) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    console.log('Dropdown is now:', this.isOpen);
  }

  onStatusChange(status: any) {
    status.checked = !status.checked;
    const selectedStatuses = this.statuses
      .filter(s => s.checked)
      .map(s => s.value);

    // Dispatch action to update filter in the store
    this.store.dispatch(invoiceAction.updateFilter({ filters: selectedStatuses }));
  }
  isDropdownOpen: boolean = false;
  isChecked: any;

}
