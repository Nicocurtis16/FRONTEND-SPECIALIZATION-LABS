import {Component, signal,OnInit} from '@angular/core';
import {Invoice} from "../../service/invoice";
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";
import {IconComponent} from "../../features/icon/icon.component";
import {DataService} from "../../service/data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    BadgeComponent,
    IconComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})

export class InvoiceComponent implements OnInit {
  invoice =signal<Invoice[]>([]);
  constructor( private dataService: DataService ) {
  }

ngOnInit() {
  this.dataService.getData().subscribe(data => {
    this.invoice.set(data);
  })

}






}
