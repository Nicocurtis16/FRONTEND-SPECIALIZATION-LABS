import { Routes } from '@angular/router';
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { InvoiceComponent } from "./component/invoice/invoice.component";
import { ViewInvoiceComponent } from "./component/view-invoice/view-invoice.component";

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'invoices',
        component: InvoiceComponent
      },
      {
        path: 'view',  // Changed from 'invoice/:id' to 'view'
        component: ViewInvoiceComponent
      },
      {
        path: '',
        redirectTo: 'invoices',
        pathMatch: 'full'
      }
    ]
  }
];
