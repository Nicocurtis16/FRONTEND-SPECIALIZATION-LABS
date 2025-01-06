import { Component, EventEmitter, Output } from '@angular/core';
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { TextComponent } from "../../features/text/text.component";
import { ButtonComponent } from "../../features/button/button.component";
import {Store} from "@ngrx/store";
import {selectedInvoiceSuccess} from "../../state/selectors/invoice.selector";
import {invoiceAction} from "../../state/actions/invoice.action";

@Component({
  selector: 'app-delete-invoice',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    ButtonComponent
  ],
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css']
})
export class DeleteInvoiceComponent {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();
  invoice = this.store.selectSignal(selectedInvoiceSuccess)
  constructor(
    private store: Store,
  ) {
  }

  onConfirm() {
    this.store.dispatch(invoiceAction.deleteInvoice({id: this.invoice()?.id as string}));
    this.confirmDelete.emit(); // Emit event for confirm delete
  }

  handleCancel() {
    this.cancelDelete.emit(); // Emit event for cancel delete
  }
}
