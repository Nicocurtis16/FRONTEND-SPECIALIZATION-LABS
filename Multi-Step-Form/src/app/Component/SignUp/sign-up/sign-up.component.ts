import { Component } from '@angular/core';
import {StatusPanelComponent} from "../status-panel/status-panel.component";
import {SelectPlanComponent} from "../../Steps/select-plan/select-plan.component";
import {AddOnsComponent} from "../../Steps/add-ons/add-ons.component";
import {SummaryComponent} from "../../Steps/summary/summary.component";
import {YourInfoComponent} from "../../Steps/your-info/your-info.component";
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    StatusPanelComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent,
    YourInfoComponent,
    RouterOutlet
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  activeStep = 1;

  constructor(private router: Router) {}

  nextStep() {
    if (this.activeStep < 4) {
      this.activeStep++;
      this.router.navigate(['/step' + this.activeStep]);
    }
  }

  prevStep() {
    if (this.activeStep > 1) {
      this.activeStep--;
      this.router.navigate(['/step' + this.activeStep]);
    }
  }
}
