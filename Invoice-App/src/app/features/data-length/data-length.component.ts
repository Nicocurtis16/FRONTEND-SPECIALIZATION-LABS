import {Component} from '@angular/core';
import {TextComponent} from "../text/text.component";
import {selectAllInvoices} from "../../state/selectors/invoice.selector";
import {Store} from "@ngrx/store";

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
  invoices = this.store.selectSignal(selectAllInvoices);
  constructor(
    private store: Store,
  ) {

  }

}
