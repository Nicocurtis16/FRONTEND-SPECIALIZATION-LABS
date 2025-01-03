import {Component, Input, Output, EventEmitter, OnInit, Signal, computed, signal} from '@angular/core';
import { ButtonComponent } from '../../features/button/button.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { Invoice } from '../../service/invoice';
import {DataService} from "../../service/data.service";
import { CommonModule, NgIf } from '@angular/common';
import { DeleteInvoiceComponent } from '../delete-invoice/delete-invoice.component'
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";
import {Store} from "@ngrx/store";
import {selectAllInvoices, selectedInvoiceSuccess} from "../../state/selectors/invoice.selector";
import {invoiceAction} from "../../state/actions/invoice.action";

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HeadLineComponent,
    NgIf,
    TextComponent,
    BadgeComponent,
    RouterOutlet
  ],
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})

export class ViewInvoiceComponent implements OnInit {
  @Output() back = new EventEmitter<void>();
  showEditInvoice = false;
  showDeleteConfirmation = false;
  invoices = this.store.selectSignal(selectAllInvoices)
  idSignal = signal<string | null>(null)
  invoice = computed(()=> this.invoices().find(invoice=>invoice.id === this.idSignal()))  as Signal<Invoice>;
  constructor(
    private store: Store,
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
const { id} = this.activatedRoute.snapshot.params;
    this.idSignal.set(id);
    this.store.dispatch(invoiceAction.setActiveInvoice({id}))

  }
  goBack() {
    this.router.navigate(['/']);
  }

  handleEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  handleDelete() {
    this.router.navigate(['delete'], { relativeTo: this.activatedRoute });

  }

  handleMarkedAsPaid() {
    this.router.navigate(['mark-paid'], { relativeTo: this.activatedRoute });
  }
}
