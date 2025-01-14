import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { invoiceAction } from '../actions/invoice.action';
import {switchMap, map, of, catchError, withLatestFrom} from 'rxjs';
import { DataService } from '../../service/data.service';
import { Store } from '@ngrx/store';
import {selectAllInvoices} from "../selectors/invoice.selector";

@Injectable({
  providedIn: 'root',
})
export class InvoiceEffect {
  private readonly actions$ = inject(Actions);
  private readonly dataService = inject(DataService);
  private readonly store = inject(Store);

  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invoiceAction.loadInvoices),
      withLatestFrom(this.store.select(selectAllInvoices)),
      switchMap(([_, invoices]) => {
        if (invoices && !!invoices.length) {
          console.log(invoices)
          return of(invoiceAction.loadInvoicesSuccess({ invoices }));
        }
        return this.dataService.fetchData().pipe(
          map((invoices) => invoiceAction.loadInvoicesSuccess({ invoices })),
          catchError((error) =>
            of(invoiceAction.loadInvoicesFail({ error }))
          )
        );
      })
    )
  );

  deleteInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invoiceAction.deleteInvoice),
      switchMap(({ id }) => {
        return this.dataService.deleteInvoice(id).pipe( // Assuming deleteInvoice() in DataService
          map(() => invoiceAction.deleteInvoiceSuccess({ id })),
          catchError((error) =>
            of(invoiceAction.deleteInvoiceFail({ error }))
          )
        );
      })
    )
  );
  updateStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invoiceAction.updateStatus),
      switchMap(({ id, status }) =>
        this.dataService.updateInvoiceStatus(id, status).pipe( // Assuming updateInvoiceStatus is defined in DataService
          map(() => invoiceAction.updateStatusSuccess({ id, status })),
          catchError((error) =>
            of(invoiceAction.updateStatusFail({ error }))
          )
        )
      )
    )
  );
}
