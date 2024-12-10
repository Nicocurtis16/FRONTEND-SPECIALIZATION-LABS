import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StatusPanelComponent } from '../status-panel/status-panel.component';
import { YourInfoComponent } from '../../Steps/your-info/your-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    StatusPanelComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements AfterViewInit {
  activeStep = 1;
  @ViewChild(YourInfoComponent) yourInfoComponent!: YourInfoComponent;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Ensure yourInfoComponent is initialized
    if (!this.yourInfoComponent) {
      console.error('YourInfoComponent is not initialized');
    }
  }

  nextStep() {
    if (this.activeStep < 4) {
      if (this.activeStep === 1) {
        // if (this.yourInfoComponent) {
        //   const isValid = this.yourInfoComponent.saveData();
        //
        //   if (!isValid) {
        //     console.log('Form is invalid');
        //     return;
        //   }
        // } else {
        //   console.error('YourInfoComponent is not initialized');
        //   return;
        // }
      }

      this.activeStep++;
      this.router.navigate(['/signup/step' + this.activeStep]).then(() => {});
    } else if (this.activeStep === 4) {
      this.confirm();
    }
  }

  prevStep() {
    if (this.activeStep > 1) {
      this.activeStep--;
      this.router.navigate(['/signup/step' + this.activeStep]).then(() => {});
    }
  }

  confirm() {
    alert('Form submitted successfully!');
  }

  get nextButtonText(): string {
    return this.activeStep === 4 ? 'Confirm' : 'Next Step';
  }
}
