import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() options: { label: string; value: string }[] = []; // Options for filtering
  @Input() selectedValues: string[] = []; // Pre-selected values
  @Output() selectionChange = new EventEmitter<string[]>(); // Emit selected values

  toggleSelection(value: string): void {
    if (this.selectedValues.includes(value)) {
      this.selectedValues = this.selectedValues.filter(val => val !== value); // Remove
    } else {
      this.selectedValues.push(value); // Add
    }
    this.selectionChange.emit(this.selectedValues); // Emit updated selection
  }
}
