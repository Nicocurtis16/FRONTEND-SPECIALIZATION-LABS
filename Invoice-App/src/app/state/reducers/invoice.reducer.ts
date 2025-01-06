import { createReducer, on } from '@ngrx/store';
import { invoiceAction } from '../actions/invoice.action';
import { Invoice } from '../../service/invoice';

export interface InvoiceState {
  invoices: Invoice[];
  isLoading: boolean;
  error: string | null;
  activeInvoice: Invoice | null; // Keep activeInvoice as an Invoice, not activeInvoiceId
  filters: string[]; // Update from Invoice[] to string[]
}

const initialInvoiceState: InvoiceState = {
  activeInvoice: null,
  invoices: [],
  isLoading: false,
  error: null,
  filters: [], // Initialize with an empty array
};

const {
  setActiveInvoice,
  loadInvoices,
  loadInvoicesSuccess,
  loadInvoicesFail,
  deleteInvoice,
  deleteInvoiceSuccess,
  deleteInvoiceFail,
  updateFilter
} = invoiceAction;

export const invoiceReducer = createReducer(
  initialInvoiceState,
  on(loadInvoices, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(loadInvoicesSuccess, (state, { invoices }) => ({
    ...state,
    isLoading: false,
    invoices: [
      ...state.invoices.filter(inv => invoices.every(newInv => newInv.id !== inv.id)),
      ...invoices
    ],
    error: null,
  })),
  on(loadInvoicesFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(deleteInvoice, (state, { id }) => ({
    ...state,
    invoices: state.invoices.filter(invoice => invoice.id !== id),
  })),
  on(deleteInvoiceSuccess, (state, { id }) => ({
    ...state,
    invoices: state.invoices.filter(invoice => invoice.id !== id),
    error: null,
  })),
  on(deleteInvoiceFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(updateFilter, (state, { filters }) => ({
    ...state,
    filters, // Update the filter state
  })),
  on(setActiveInvoice, (state, { id }) => ({
    ...state,
    activeInvoice: state.invoices.find(invoice => invoice.id === id) || null,
  })) // This will handle setting the activeInvoice correctly
);
