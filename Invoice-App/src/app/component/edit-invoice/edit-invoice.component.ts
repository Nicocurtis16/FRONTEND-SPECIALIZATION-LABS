import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";

@Component({
  selector: 'app-edit-invoice',
  standalone: true,
  imports: [
    SidebarComponent,
    HeadLineComponent,
    TextComponent
  ],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css'
})
export class EditInvoiceComponent {

}
