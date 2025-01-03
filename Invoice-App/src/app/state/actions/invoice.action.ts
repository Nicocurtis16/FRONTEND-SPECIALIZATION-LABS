import {createActionGroup, emptyProps, props} from '@ngrx/store';
import { Invoice } from '../../service/invoice';

export const invoiceAction = createActionGroup({
  source: 'InvoiceComponent',
  events: {
    loadInvoices: emptyProps(),
    loadInvoicesSuccess: props<{ invoices: Invoice[] }>(),
    loadInvoicesFail: props<{ error: any }>(),
    deleteInvoice: props<{ id: string }>(),  // Action for deleting an invoice
    deleteInvoiceSuccess: props<{ id: string }>(),  // Action for successful deletion
    deleteInvoiceFail: props<{ error: any }>(),  // Action for failed deletion
    setActiveInvoice: props<{ id : string}>(),
  },
});
