import {createActionGroup, emptyProps, props} from '@ngrx/store';
import { Invoice } from '../../service/invoice';

export const invoiceAction = createActionGroup({
  source: 'InvoiceComponent',
  events: {
    loadInvoices: emptyProps(),
    loadInvoicesSuccess: props<{ invoices: Invoice[] }>(),
    loadInvoicesFail: props<{ error: any }>(),
    deleteInvoice: props<{ id: string }>(),
    deleteInvoiceSuccess: props<{ id: string }>(),
    deleteInvoiceFail: props<{ error: any }>(),
    setActiveInvoice: props<{ id: string }>(),
    updateFilter: props<{ filters: string[] }>(), // Add filter update action
  },
});

