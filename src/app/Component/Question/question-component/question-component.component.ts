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
  totalQuestions: number = 0;
  currentQuestion: any;
  quizCompleted: boolean = false;

  // New properties for tracking score
  quizTitle: string = '';
  quizIcon: string = '';
  correctAnswersCount: number = 0;

  ngOnInit() {
    console.log('Full Quiz Data:', this.questionData);

    if (this.questionData && this.questionData.questions) {
      this.quizTitle = this.questionData.title;
      this.quizIcon = this.questionData.icon;

      this.totalQuestions = this.questionData.questions.length;
      this.currentQuestion = this.questionData.questions[this.currentQuestionIndex];
    }
  }

  handleAnswerSubmitted(isCorrect: boolean) {
    if (isCorrect) {
      this.correctAnswersCount++;
    }
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestion = this.questionData.questions[this.currentQuestionIndex];
    } else {
      this.quizCompleted = true;
    }
  }
}
