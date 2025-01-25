import { Routes } from '@angular/router';
import { InvoiceComponent } from "./component/invoice/invoice.component";
import { ViewInvoiceComponent } from "./component/view-invoice/view-invoice.component";
import {LoginComponent} from "./component/login/login.component";
import { LayoutComponent } from './features/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'invoice', component: InvoiceComponent },
      { path: 'invoice/:id', component: ViewInvoiceComponent },
    ],
  },
];
