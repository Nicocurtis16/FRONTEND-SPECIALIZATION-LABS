import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {invoiceReducer} from "./state/reducers/invoice.reducer";
import {routes} from "./app.routes";
import {provideRouter} from "@angular/router";
import {InvoiceEffect} from "./state/effects/invoice.effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideEffects([InvoiceEffect]),
    provideState({
      name: "invoices",
      reducer: invoiceReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

  ]
};
