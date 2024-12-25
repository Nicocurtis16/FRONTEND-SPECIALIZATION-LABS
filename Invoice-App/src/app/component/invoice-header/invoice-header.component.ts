import { Component } from '@angular/core';
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {ButtonComponent} from "../../features/button/button.component";
import {FilterComponent} from "../../features/filter/filter.component";

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [
    HeadLineComponent,
    ButtonComponent,
    FilterComponent
  ],
  templateUrl: './invoice-header.component.html',
  styleUrl: './invoice-header.component.css'
})
export class InvoiceHeaderComponent {
  filterOptions = [
    { label: 'Draft', value: 'draft' },
    { label: 'Pending', value: 'pending' },
    { label: 'Paid', value: 'paid' }
  ];

  selectedStatuses: string[] = [];

  onSelectionChange(selectedValues: string[]): void {
    this.selectedStatuses = selectedValues;
    console.log('Filtered statuses:', this.selectedStatuses);
    // Perform filtering logic here
  }
}
