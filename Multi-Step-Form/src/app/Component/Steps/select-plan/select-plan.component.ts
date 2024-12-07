import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent {
  yearlyPlans = [
    { name: 'Arcade', price: '$9/mo', imgUrl: 'assets/images/icon-arcade.svg' },
    { name: 'Advance', price: '$12/mo', imgUrl: 'assets/images/icon-advanced.svg' },
    { name: 'Pro', price: '$15/mo', imgUrl: 'assets/images/icon-pro.svg' }
  ];

 monthlyPlans = [
   { name: 'Arcade', price: '$90/mo', imgUrl: 'assets/images/icon-arcade.svg' },
   { name: 'Advance', price: '$120/mo', imgUrl: 'assets/images/icon-advanced.svg' },
   { name: 'Pro', price: '$150/mo', imgUrl: 'assets/images/icon-pro.svg' }
 ];

  isMonthly = false;

  togglePlan() {
    this.isMonthly = !this.isMonthly;
  }
}
