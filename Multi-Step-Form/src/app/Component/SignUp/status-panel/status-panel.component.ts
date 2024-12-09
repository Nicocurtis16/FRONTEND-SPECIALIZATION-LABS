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
    { statusNumber: 1, statusName: 'STEP 1' ,statusInfo: 'YOUR INFO' },
    { statusNumber: 2, statusName: 'STEP 2',statusInfo: 'SELECT PLAN' },
    { statusNumber: 3, statusName: 'STEP 3',statusInfo: 'ADD-ONS' },
    { statusNumber: 4, statusName: 'STEP 4',statusInfo: 'SUMMARY' }
  ];



}
