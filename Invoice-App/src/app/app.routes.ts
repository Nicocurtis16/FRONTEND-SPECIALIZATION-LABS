import { Routes } from '@angular/router';
import { InvoiceComponent } from "./component/invoice/invoice.component";
import { ViewInvoiceComponent } from "./component/view-invoice/view-invoice.component";
import {LoginComponent} from "./component/login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'invoice', component: InvoiceComponent },
  {
    path: 'invoice/:id', component: ViewInvoiceComponent},
];
