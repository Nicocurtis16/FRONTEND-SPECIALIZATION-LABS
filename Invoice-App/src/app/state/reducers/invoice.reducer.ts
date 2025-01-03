import { createReducer, on } from '@ngrx/store';
import { invoiceAction } from '../actions/invoice.action';
import { Invoice } from '../../service/invoice';

export interface InvoiceState {
  invoices: Invoice[];
  isLoading: boolean;
  error: string | null;
  activeInvoice:Invoice | null;
}

const initialInvoiceState: InvoiceState = {
  activeInvoice: null,
  invoices: [],
  isLoading: false,
  error: null,
};

const {
  setActiveInvoice,
  loadInvoices,
  loadInvoicesSuccess,
  loadInvoicesFail,
  deleteInvoice,
  deleteInvoiceSuccess,
  deleteInvoiceFail,
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
    invoices: [...state.invoices.filter(inv => invoices.every(newInv => newInv.id !== inv.id)), ...invoices],
    error: null, // Clear any previous errors after successful load
  })),
  on(loadInvoicesFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(deleteInvoice, (state,{id}) => ({
    ...state,
    invoices: state.invoices.filter(invoice => invoice.id !== id),
  })),
  on(deleteInvoiceSuccess, (state, { id }) => ({
    ...state,
    isLoading: false,
    invoices: state.invoices.filter(invoice => invoice.id !== id),  // Remove the invoice with the specified id
    error: null, // Clear any previous errors after successful deletion
  })),
  on(deleteInvoiceFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(setActiveInvoice, (state,{id}) => ({
    ...state,
    activeInvoice: state.invoices.find(invoice => invoice.id === id) as Invoice,
  }))

);
