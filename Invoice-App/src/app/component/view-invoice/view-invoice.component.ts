import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { ButtonComponent } from '../../features/button/button.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { Invoice } from '../../service/invoice';
import {DataService} from "../../service/data.service";
import { CommonModule, NgIf } from '@angular/common';
import { DeleteInvoiceComponent } from '../delete-invoice/delete-invoice.component'
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HeadLineComponent,
    NgIf,
    DeleteInvoiceComponent,
    TextComponent,
    BadgeComponent,
    RouterOutlet
  ],
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})

export class ViewInvoiceComponent implements OnInit {
  @Input() invoice: Invoice | null = null;
  @Output() back = new EventEmitter<void>();
  showEditInvoice = false;
  showDeleteConfirmation = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.dataService.getInvoiceById(id).subscribe(invoice => {
        this.invoice = invoice;
        if (!this.invoice) {
          console.error('Invoice not found');
          this.router.navigate(['/']);
        }
      });
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }

  handleEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  handleDelete() {
    this.router.navigate(['delete'], { relativeTo: this.route });

  }

  handleMarkedAsPaid() {
    this.router.navigate(['mark-paid'], { relativeTo: this.route });
  }
}
