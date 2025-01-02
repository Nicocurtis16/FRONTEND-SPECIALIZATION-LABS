import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {invoiceReducer} from "./state/reducers/invoice.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
    provideStoreDevtools
    ({ maxAge: 25, logOnly: !isDevMode() })
    , provideStore(
    ),
    provideEffects(),
    provideState({
      name: "invoices",
      reducer: invoiceReducer,
    })
  ]
};
