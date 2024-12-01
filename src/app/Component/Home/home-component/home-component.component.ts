import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like NgIf
import { SharedService } from '../../../shared.service'; // Import SharedService

import { ButtonComponentComponent } from "../../Button/button-component/button-component.component";
import { QuestionComponentComponent } from "../../Question/question-component/question-component.component"; // Import the QuestionComponent

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponentComponent,
    QuestionComponentComponent // Add the QuestionComponent here
  ],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  iconPath: string = '';
  showQuestionComponent: boolean = false;
  selectedQuestionData: any; // Data to pass to QuestionComponent

  constructor(private sharedService: SharedService) {} // Inject SharedService

  ngOnInit() {
    const jsonData = { icon: 'assets/images/icon-html.svg' };
    this.iconPath = jsonData.icon;
  }

  handleButtonClick(button: any) {
    console.log('Clicked button data:', button);

    // Update SharedService with the selected button's title and icon
    this.sharedService.setSelectedButton({
      icon: button.icon || 'default-icon-path.svg', // Fallback to default icon if not available
      title: button.title || 'Default Title' // Fallback to default title if not available
    });

    if (button.questions && button.questions.length > 0) {
      // Select the first question for demonstration purposes
      this.selectedQuestionData = button.questions[0]; // Modify logic to select a question dynamically if needed
      this.showQuestionComponent = true;
    } else {
      console.warn('No questions available for this button');
    }
  }
}
