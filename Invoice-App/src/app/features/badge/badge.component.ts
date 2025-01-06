import { Component, Input } from '@angular/core';
import {HeadLineComponent} from "../head-line/head-line.component";

@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  imports: [
    HeadLineComponent
  ],
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() status: 'paid' | 'pending' | 'draft' = 'pending';


  getStatusTextColor(status: string): string {
    switch (status) {
      case 'paid':
        return 'rgb(22, 101, 52)';
      case 'pending':
        return 'rgb(133, 77, 14)';
      case 'draft':
        return 'rgb(55, 65, 81)';
      default:
        return 'inherit'; // Default fallback color
    }
  }
}
