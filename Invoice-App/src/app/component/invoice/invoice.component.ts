import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { Invoice } from '../../service/invoice';
import { NgFor, NgIf, DatePipe, NgClass } from '@angular/common';
import { BadgeComponent } from '../../features/badge/badge.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { TextComponent } from '../../features/text/text.component';
import {InvoiceHeaderComponent} from "../invoice-header/invoice-header.component";

@Component({
  selector: 'app-invoice',
  imports: [HttpClientModule, NgFor, NgIf, DatePipe, NgClass, BadgeComponent, HeadLineComponent, TextComponent, InvoiceHeaderComponent],
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const storedData = this.dataService.getDataFromLocalStorage();
    if (storedData) {
      this.invoices = storedData;
    } else {
      this.dataService.fetchData().subscribe({
        next: (data) => {
          this.invoices = data;
        },
        error: (error) => {
          console.error('Error fetching invoices:', error);
        }
      });
    }
  }

  refreshData() {
    this.invoices = this.dataService.getDataFromLocalStorage() ?? [];
  }

  clearData() {
    this.dataService.clearDataFromLocalStorage();
    this.invoices = [];
  }
}
