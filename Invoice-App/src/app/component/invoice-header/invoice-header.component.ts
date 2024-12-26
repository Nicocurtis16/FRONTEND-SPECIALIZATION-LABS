import {Component, EventEmitter, Output} from '@angular/core';
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
  @Output() statusFilter = new EventEmitter<string[]>();

  onFilterChange(statuses: string[]) {
    console.log('Header received statuses:', statuses);
    this.statusFilter.emit(statuses);
  }
}
