import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponentComponent } from "../../Options/options-component/options-component.component";

@Component({
  selector: 'app-question-component',
  standalone: true,
  imports: [CommonModule, OptionsComponentComponent],
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit {
  @Input() questionData: any;
  currentQuestionIndex: number = 0;
  currentQuestion: any;
  totalQuestions: number = 0;
  quizCompleted: boolean = false;

  ngOnInit() {
    if (this.questionData && this.questionData.questions) {
      this.totalQuestions = this.questionData.questions.length;
      this.currentQuestion = this.questionData.questions[this.currentQuestionIndex];
    }
  }

  handleAnswerSubmitted(isCorrect: boolean) {
    // Optional: Add score tracking or other logic
    console.log('Answer submitted. Correct:', isCorrect);
  }

  moveToNextQuestion() {
    this.currentQuestionIndex += 1;

    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestion = this.questionData.questions[this.currentQuestionIndex];
    } else {
      this.quizCompleted = true;
      console.log('Quiz completed');
    }
  }
}
