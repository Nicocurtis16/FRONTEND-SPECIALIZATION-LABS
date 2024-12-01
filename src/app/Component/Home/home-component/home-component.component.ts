import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like NgIf

import { ButtonComponentComponent } from "../../Button/button-component/button-component.component";
import { QuestionComponentComponent } from "../../Question/question-component/question-component.component"; // Import the QuestionComponent

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule,
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

  ngOnInit() {
    const jsonData = { icon: 'assets/images/icon-html.svg' };
    this.iconPath = jsonData.icon;
  }

  handleButtonClick(button: any) {
    console.log('Clicked button data:', button);
    if (button.questions && button.questions.length > 0) {
      // Select the first question for demonstration purposes
      this.selectedQuestionData = button.questions[0]; // Here we can modify logic to select a question dynamically
      this.showQuestionComponent = true;
    } else {
      console.warn('No questions available for this button');
    }
  }
}
