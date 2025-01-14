import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { invoiceAction } from '../../state/actions/invoice.action';
import { selectedInvoiceSuccess } from '../../state/selectors/invoice.selector';
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {ButtonComponent} from "../../features/button/button.component";
import {TextComponent} from "../../features/text/text.component";

@Component({
  selector: 'app-delete-invoice',
  standalone: true,
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css'],
  imports: [
    HeadLineComponent,
    ButtonComponent,
    TextComponent,
    // Add your required imports
  ]
})
export class DeleteInvoiceComponent {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  invoice = this.store.selectSignal(selectedInvoiceSuccess);

  constructor(private store: Store, private router: Router) {}

  onConfirm() {
    const currentInvoice = this.invoice();
    if (currentInvoice) {
      this.store.dispatch(invoiceAction.deleteInvoice({ id: currentInvoice.id }));
      this.confirmDelete.emit(); // Notify parent of delete confirmation
    }
  }

  handleCancel() {
    this.cancelDelete.emit(); // Notify parent of cancel action
  }
}
