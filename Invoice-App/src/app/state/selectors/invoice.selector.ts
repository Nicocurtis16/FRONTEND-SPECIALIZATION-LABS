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
