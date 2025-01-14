import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { invoiceReducer, InvoiceState } from './invoice.reducer';
export interface AppState {
  invoices: InvoiceState;
}
export const reducers: ActionReducerMap<AppState> = {
  invoices: invoiceReducer,
};
export const localStorageSyncReducer = localStorageSync({
  keys: ['invoices'],
  rehydrate: true,
});
export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];






