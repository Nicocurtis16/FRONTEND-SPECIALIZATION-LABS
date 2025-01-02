import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Invoice} from "../../service/invoice";

export const invoiceAction = createActionGroup(
  {
    source: "InvoiceComponent",
    events: {
      loadInvoices: emptyProps(),
      loadInvoicesSuccess: props<{invoices : Invoice[]}>(),
      loadInvoicesFail: props<{error:any }>(),
    }

  }
);
