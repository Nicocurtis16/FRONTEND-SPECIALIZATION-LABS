import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { invoiceAction } from '../actions/invoice.action';
import { switchMap, map, of, catchError } from 'rxjs';
import { DataService } from '../../service/data.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class InvoiceEffect {
  private readonly actions$ = inject(Actions);
  private readonly DataService = inject(DataService);
  private readonly store = inject(Store);

  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invoiceAction.loadInvoices),
      switchMap(() => {
        return this.DataService.fetchData().pipe(
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
        return this.DataService.deleteInvoice(id).pipe( // Assuming deleteInvoice() in DataService
          map(() => invoiceAction.deleteInvoiceSuccess({ id })),
          catchError((error) =>
            of(invoiceAction.deleteInvoiceFail({ error }))
          )
        );
      })
    )
  );
}
