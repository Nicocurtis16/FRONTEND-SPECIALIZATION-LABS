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
  showQuestionComponent: boolean = false; // State to control visibility of QuestionComponent

  ngOnInit() {
    // Simulating fetching data from a JSON file
    const jsonData = { icon: 'assets/images/icon-html.svg' };
    this.iconPath = jsonData.icon;
  }

  handleButtonClick(button: any) {
    console.log('Clicked button data:', button);
    this.showQuestionComponent = true; // Toggle to show QuestionComponent
  }
}
