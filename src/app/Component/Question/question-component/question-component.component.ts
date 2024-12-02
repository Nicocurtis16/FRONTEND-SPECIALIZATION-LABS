import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponentComponent } from "../../Options/options-component/options-component.component";
import { QuizCompleteComponent } from '../../Complete/quiz-complete/quiz-complete.component';

@Component({
  selector: 'app-question-component',
  standalone: true,
  imports: [CommonModule, OptionsComponentComponent, QuizCompleteComponent],
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit {
  @Input() questionData: any;

  currentQuestionIndex: number = 0;
  totalQuestions: number = 0;
  currentQuestion: any;
  quizCompleted: boolean = false;
  quizProgress: number = 0;
  quizTitle: string = '';
  quizIcon: string = '';
  correctAnswersCount: number = 0;

  ngOnInit() {
    if (this.questionData?.questions) {
      this.quizTitle = this.questionData.title;
      this.quizIcon = this.questionData.icon;
      this.totalQuestions = this.questionData.questions.length;
      this.currentQuestion = this.questionData.questions[this.currentQuestionIndex];
      this.calculateQuizProgress();
    }
  }

  calculateQuizProgress() {
    this.quizProgress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
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
      this.calculateQuizProgress();
    } else {
      this.quizCompleted = true;
    }
  }
}
