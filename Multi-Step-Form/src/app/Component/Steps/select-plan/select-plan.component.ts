import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent {
  monthlyPlans = [
    {name: 'Basic', price: '$10/month'},
    {name: 'Standard', price: '$20/month'},
    {name: 'Premium', price: '$30/month'}
  ];

  yearlyPlans = [
    {name: 'Basic', price: '$100/year'},
    {name: 'Standard', price: '$200/year'},
    {name: 'Premium', price: '$300/year'}
  ];

  isMonthly = true;

  togglePlan() {
    this.isMonthly = !this.isMonthly;
  }
}
