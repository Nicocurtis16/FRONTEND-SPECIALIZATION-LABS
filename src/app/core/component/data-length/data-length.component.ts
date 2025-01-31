import {Component} from '@angular/core';
import {TextComponent} from "../../../shared/component/text/text.component";
import {Store} from "@ngrx/store";
import {selectFilteredInvoices} from "../../../shared/state/selectors/invoice.selector";

@Component({
  selector: 'app-data-length',
  standalone: true,
  imports: [
    TextComponent
  ],
  templateUrl: './data-length.component.html',
  styleUrl: './data-length.component.css'
})
export class DataLengthComponent {
  invoices = this.store.selectSignal(selectFilteredInvoices);
  constructor(
    private store: Store,
  ) {

  }

}
