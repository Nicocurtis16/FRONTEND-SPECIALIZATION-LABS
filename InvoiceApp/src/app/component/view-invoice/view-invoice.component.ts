import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import {CommonModule, CurrencyPipe, DatePipe, NgIf} from '@angular/common';
import {Invoice} from "../../service/invoice";
import {ActivatedRoute} from "@angular/router";
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";
import {ButtonComponent} from "../../features/button/button.component";

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [
    CommonModule,
    HeadLineComponent,
    TextComponent,
    BadgeComponent,
    ButtonComponent,

  ],
  templateUrl: './view-invoice.component.html',
  providers: [CurrencyPipe,DatePipe],

  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  invoice: Invoice | undefined;
  isDeleteVisible: any;

  constructor( private route: ActivatedRoute ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
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

  }

  handleEdit() {

  }

  handleDelete() {

  }

  handleMarkedAsPaid() {

  }

  closeDeleteModal() {

  }

  getFormattedDate(createdAt: string) {
    return "";
  }
}
