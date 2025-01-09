import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {ButtonComponent} from "../../features/button/button.component";
import {FilterComponent} from "../../features/filter/filter.component";
import {DataLengthComponent} from "../../features/data-length/data-length.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [
    HeadLineComponent,
    ButtonComponent,
    FilterComponent,
    DataLengthComponent
  ],
  templateUrl: './invoice-header.component.html',
  styleUrl: './invoice-header.component.css'
})
export class InvoiceHeaderComponent {
  @Input() invoiceCount: number = 0; // Accept the count as input

  @Output() statusFilter = new EventEmitter<string[]>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  onFilterChange(statuses: string[]) {
    console.log('Header received statuses:', statuses);
    this.statusFilter.emit(statuses);
  }
  newInvoice() {
    this.router.navigate(['/new-invoice'] ,{relativeTo: this.activatedRoute}).then(sucess =>{
      if (!sucess) {
        console.log('Navigate to new invoice failed');
      }
    });
  }
}
