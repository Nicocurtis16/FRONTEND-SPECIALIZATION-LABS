// app.routes.ts
import { Routes } from '@angular/router';
import { InvoiceComponent } from "./component/invoice/invoice.component";
import { ViewInvoiceComponent } from "./component/view-invoice/view-invoice.component";
import { EditInvoiceComponent } from "./component/edit-invoice/edit-invoice.component";
import { DeleteInvoiceComponent } from "./component/delete-invoice/delete-invoice.component";

export const routes: Routes = [
  { path: '', component: InvoiceComponent },
  {
    path: 'invoice/:id',
    component: ViewInvoiceComponent,
    children: [
      { path: 'edit', component: EditInvoiceComponent },
      { path: 'delete', component: DeleteInvoiceComponent },
      // { path: 'mark-paid', component: MarkAsPaidComponent }
    ]
  }
];
