// app.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import {InvoiceComponent} from "./component/invoice/invoice.component";
import {ViewInvoiceComponent} from "./component/view-invoice/view-invoice.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: InvoiceComponent },
      { path: 'invoice/:id', component: ViewInvoiceComponent }
    ]
  }
];
