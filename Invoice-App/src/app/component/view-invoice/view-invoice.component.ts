import {Component, Input, Output, EventEmitter, OnInit, Signal, computed, signal} from '@angular/core';
import { ButtonComponent } from '../../features/button/button.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { Invoice } from '../../service/invoice';
import {DataService} from "../../service/data.service";
import { CommonModule, NgIf } from '@angular/common';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";
import {Store} from "@ngrx/store";
import {selectAllInvoices, selectedInvoiceSuccess, selectIsLoadingState} from "../../state/selectors/invoice.selector";
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
  ],
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})

export class ViewInvoiceComponent implements OnInit {
  showEditInvoice = false;
  showDeleteConfirmation = false;
  invoices = this.store.selectSignal(selectAllInvoices)
  idSignal = signal<string | null>(null)
  invoice = computed(()=> this.invoices().find(invoice=>invoice.id === this.idSignal()))  as Signal<Invoice>;
  isDrawerOpen = false; // Controls drawer visibility
  activeDrawer: 'edit' | 'new' | null = null;
  invoiceItems: any[] = [];
  constructor(
    private store: Store,
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  isLoading = this.store.select(selectIsLoadingState);

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.idSignal.set(id);
    this.store.dispatch(invoiceAction.setActiveInvoice({ id }));

    this.store.select(selectIsLoadingState).subscribe((loading) => {
      if (!loading) {
        const invoice = this.invoices().find((inv) => inv.id === id);
        if (invoice) {
          console.log('Invoice loaded:', invoice);
        }
      }
    });
  }



  goBack() {
    this.router.navigate(['/']);
  }

  handleEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute }).then(success => {
      if (!success) {
        console.error("Navigation to edit failed.");
      }
    });

  }
  // handleEdit() {
  //   this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  //   this.activeDrawer = 'edit';
  //   this.isDrawerOpen = true;
  // }

  closeDrawer() {
    this.activeDrawer = null;
    this.isDrawerOpen = false;
  }
  handleDelete() {
    this.router.navigate(['delete'], { relativeTo: this.activatedRoute });

  }

  handleMarkedAsPaid() {
    const currentInvoice = this.invoice();
    if (currentInvoice) {
      this.store.dispatch(
        invoiceAction.updateStatus({ id: currentInvoice.id, status: 'paid' })
      );
    }
  }


}
