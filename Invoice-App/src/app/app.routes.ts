import { Routes } from '@angular/router';
import { InvoiceComponent } from "./component/invoice/invoice.component";
import { ViewInvoiceComponent } from "./component/view-invoice/view-invoice.component";

export const routes: Routes = [
  { path: '', component: InvoiceComponent },
  {
    path: 'invoice/:id', component: ViewInvoiceComponent},
];
