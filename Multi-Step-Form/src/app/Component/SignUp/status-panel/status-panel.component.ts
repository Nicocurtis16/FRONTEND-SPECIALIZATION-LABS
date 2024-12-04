import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-panel',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.css']
})
export class StatusPanelComponent {
  @Input() activeStep: number = 1;

  detailsOfStatus = [
    { statusNumber: 1, statusName: 'Step 1' },
    { statusNumber: 2, statusName: 'Step 2' },
    { statusNumber: 3, statusName: 'Step 3' },
    { statusNumber: 4, statusName: 'Step 4' }
  ];



}
