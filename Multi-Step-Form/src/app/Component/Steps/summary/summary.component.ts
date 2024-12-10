import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input() formData: any;

  constructor() {}


  calculateTotal() {
    let total = 0;

    if (this.formData?.selectPlan) {
      const price = this.formData.selectPlan.price?.replace('$', '').replace('/mo', '');
      total += parseFloat(price) || 0; // Fallback to 0 if parse fails
    }

    if (this.formData?.addOns?.length) {
      this.formData.addOns.forEach((addOn: any) => {
        const price = addOn?.price?.replace('+$', '').replace('/mo', '');
        total += parseFloat(price) || 0; // Fallback to 0 if parse fails
      });
    }

    return total;
  }

}
