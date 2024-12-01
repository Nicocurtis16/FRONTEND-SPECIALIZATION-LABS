import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponentComponent } from "../../Options/options-component/options-component.component";

@Component({
  selector: 'app-question-component',
  standalone: true,
  imports: [CommonModule, OptionsComponentComponent],
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent {
  @Input() questionData: any;
  currentQuestionIndex: number = 0;
  showNextButton: boolean = false;

  ngOnInit() {
    console.log('Received data:', this.questionData);
  }

  handleAnswerSubmitted(isCorrect: boolean) {
    this.showNextButton = true;
    // Optionally, you can add logic to track score or show a message
  }

  moveToNextQuestion() {
    this.showNextButton = false;

    // Check if there are more questions
    if (this.questionData && this.questionData.questions &&
      this.currentQuestionIndex + 1 < this.questionData.questions.length) {
      this.currentQuestionIndex += 1;
      // Update the current question
      this.questionData = this.questionData.questions[this.currentQuestionIndex];
    } else {
      console.log('Quiz completed');
      // Optionally, implement quiz completion logic
    }
  }
}
