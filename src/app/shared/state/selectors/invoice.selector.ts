import {createFeatureSelector, createSelector} from "@ngrx/store";
import {InvoiceState} from "../reducers/invoice.reducer";

export const selectInvoiceState = createFeatureSelector<InvoiceState>("invoices");
export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state:InvoiceState) => state.invoices
)
export const selectIsLoadingState = createSelector(
  selectInvoiceState,
  (state:InvoiceState) => state.isLoading
)
export const selectedInvoiceSuccess = createSelector(
  selectInvoiceState,
  (state:InvoiceState) => state.activeInvoice
)
export const selectFilters = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.filters
);

export const selectFilteredInvoices = createSelector(
  selectAllInvoices,
  selectFilters,
  (invoices, filters) => {
    if (!filters.length) return invoices; // Return all if no filters
    return invoices.filter(invoice => filters.includes(invoice.status));
  }
);
export const selectInvoicesByStatus = (status: 'paid' | 'pending' | 'draft') =>
  createSelector(selectAllInvoices, (invoices) =>
    invoices.filter(invoice => invoice.status === status)
  );
export const selectActiveInvoice = createSelector(
  selectInvoiceState,
  (state:InvoiceState) => state.activeInvoice
)
