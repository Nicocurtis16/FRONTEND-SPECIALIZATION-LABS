import { Routes } from '@angular/router';
import { DashboardComponent } from "./core/component/dashboard/dashboard.component";
import { InvoiceComponent } from "./core/pages/invoice/invoice.component";
import { ViewInvoiceComponent } from "./core/pages/view-invoice/view-invoice.component";

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
