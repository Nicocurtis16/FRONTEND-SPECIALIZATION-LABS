import {Invoice} from "../../service/invoice";
import { invoiceAction} from "../actions/invoice.action";
import {createReducer, on, props} from "@ngrx/store";

export interface InvoiceState{
  invoices: Invoice[];
  isLoading : boolean;
  error : string | null;
}
const intialInvoiceState: InvoiceState = {
  invoices: [],
  isLoading: false,
  error: null,
}
const {
  loadInvoices ,
  loadInvoicesSuccess,
  loadInvoicesFail,
} = invoiceAction;

export const invoiceReducer = createReducer(
  intialInvoiceState,
  on(loadInvoices,(state) =>({
    ...state,
    isLoading: true,
    error: null,
    })
  ),
  on(loadInvoicesSuccess,(state,{invoices}) =>({
    ...state,
    isLoading: false,
    invoices : [...state.invoices.filter(inv =>invoices.every(newInv => newInv.id === inv.id)),
      ...invoices
    ],

  })),
  on(loadInvoicesFail,(state,{error})=>({
    ...state,
    isLoading: false,
    error,
  }))
)
