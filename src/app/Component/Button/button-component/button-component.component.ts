import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../shared.service'; // Import the shared service

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="button-container">
      <button
        class="dynamicButton"
        *ngFor="let button of buttons"
        (click)="onButtonClick(button)">
        <img
          *ngIf="button.icon"
          [src]="button.icon"
          [alt]="button.title + ' icon'"
          class="dynamicButtonLogo">
        <span class="dynamicButtonText">{{ button.title || button.name }}</span>
      </button>
    </div>
  `,
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {
  @Input() buttonType: string = ''; // Optional input to filter buttons by type
  @Input() displayProperties: string[] = []; // Properties to display dynamically
  @Output() buttonClicked = new EventEmitter<any>(); // Emit clicked button data

  buttons: any[] = [];

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  ngOnInit() {
    this.fetchButtons();
  }

  fetchButtons() {
    this.http.get<any>('assets/data.json').subscribe({
      next: (response) => {
        if (response && response.quizzes) {
          // Transform data into a button-friendly structure
          this.buttons = response.quizzes.map((quiz: any) => ({
            title: quiz.title,
            icon: quiz.icon,
            ...quiz // Spread other properties to make them accessible
          }));
        } else {
          console.warn('No quizzes found in the response!');
          this.buttons = [];
        }
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.buttons = [];
      }
    });
  }

  onButtonClick(button: any) {
    console.log('Button clicked:', button);
    this.sharedService.setSelectedButton(button); // Update the selected button in the shared service
    this.buttonClicked.emit(button); // Emit button data if needed
  }
}
