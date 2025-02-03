import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Invoice } from "../../../shared/service/invoice";
import { ActivatedRoute, Router } from "@angular/router";
import { HeadLineComponent } from "../../../shared/component/head-line/head-line.component";
import { TextComponent } from "../../../shared/component/text/text.component";
import { BadgeComponent } from "../../../shared/component/badge/badge.component";
import { ButtonComponent } from "../../../shared/component/button/button.component";
import { Store } from "@ngrx/store";
import { DataService } from "../../../shared/service/data.service";
import { DrawerService } from "../../service/drawer.service";
import { invoiceAction } from "../../../shared/state/actions/invoice.action";
import {DeletePromptComponent} from "../../feature/delete-prompt/delete-prompt.component";
import {NotificationService} from "../../../shared/service/notification.service";
import {IconComponent} from "../../../shared/component/icon/icon.component";
import {SliderComponent} from "../../feature/slider/slider.component";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [
    CommonModule,
    HeadLineComponent,
    TextComponent,
    BadgeComponent,
    ButtonComponent,
    DeletePromptComponent,
    SliderComponent,
    FormComponent,
  ],
  templateUrl: './view-invoice.component.html',
  providers: [CurrencyPipe, DatePipe],
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  invoice: Invoice | undefined;
  isDeletePromptVisible: boolean = false;
  isDrawerOpen = true;
  showEditInvoice = false;
  activeDrawer: 'edit' | 'new' | null = null;



  constructor(
    private store: Store,
    private dataService: DataService,
    private router: Router,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private drawerService: DrawerService,
    private notificationService: NotificationService
  ) {}



ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.invoice = {
        id: params['id'],
        createdAt: params['createdAt'],
        paymentDue: params['paymentDue'],
        description: params['description'],
        clientName: params['clientName'],
        clientEmail: params['clientEmail'],
        status: params['status'],
        senderAddress: JSON.parse(params['senderAddress']),
        clientAddress: JSON.parse(params['clientAddress']),
        items: JSON.parse(params['items']),
        total: Number(params['total']),
        paymentTerms: Number(params['paymentTerms'])
      };
    });
  }

  goBack() {
    this.router.navigate(['dashboard/invoices']);
  }

  handleEdit() {
    const currentInvoice = this.invoice;
    if (currentInvoice) {
      console.log('Dispatching setActiveInvoice:', currentInvoice);
      this.store.dispatch(invoiceAction.setActiveInvoice({ id: currentInvoice.id }));
      this.drawerService.openDrawer('editInvoice');
    }
  }

  handleDelete() {
    this.isDeletePromptVisible = true;
  }
  onConfirmDelete() {
    if(this.invoice) {
      this.store.dispatch(invoiceAction.deleteInvoice({ id: this.invoice.id}));
      this.isDeletePromptVisible = false;
      this.router.navigate(['dashboard/invoices']);
      this.notificationService.showNotification('invoice delete sucesffuly .', 'success');

    }
  }
  isSliderVisible = false; // Controls slider visibility
  isEditMode = false; // Tracks whether the form is in edit mode
  selectedInvoice: Invoice | null = null; // Stores the invoice to edit

  onCancelDelete() {
    this.isDeletePromptVisible = false;
  }
  openEditSlider(invoice: Invoice) {
    this.isEditMode = true; // Set to edit mode
    this.selectedInvoice = invoice; // Set the invoice to edit
    this.isSliderVisible = true; // Show the slider
  }

  closeSlider() {
    this.isSliderVisible = false; // Hide the slider
    this.selectedInvoice = null; // Reset the selected invoice
  }
  // closeDeleteModal() {
  //   this.isDeleteVisible = false;
  // }

  handleMarkedAsPaid() {
    const currentInvoice = this.invoice;
    if (currentInvoice) {
      this.store.dispatch(
        invoiceAction.updateStatus({ id: currentInvoice.id, status: 'paid' })
      );
    }
  }

  getFormattedDate(date: string): string {
    return this.datePipe.transform(date, 'dd MMM yyyy') || '';
  }
}
