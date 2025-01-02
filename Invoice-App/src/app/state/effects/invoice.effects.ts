import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {invoiceAction} from "../actions/invoice.action";
import { switchMap, map, of, withLatestFrom, catchError } from 'rxjs';
import {DataService} from "../../service/data.service";
import { Store } from '@ngrx/store';
import { selectAllInvoices } from '../selectors/invoice.selector';
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
      withLatestFrom(this.store.select(selectAllInvoices)),
      switchMap(([_, invoices]) => {
        if (invoices && !!invoices.length) {
          return of(invoiceAction.loadInvoicesSuccess({ invoices }));
        }
        return this.DataService.fetchData().pipe(
          map((invoices) => invoiceAction.loadInvoicesSuccess({ invoices })),
          catchError((error) =>
            of(invoiceAction.loadInvoicesFail({ error }))
          )
        );
      })
    )
  );
}
