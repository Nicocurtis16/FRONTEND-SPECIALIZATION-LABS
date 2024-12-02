import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quiz-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-complete.component.html',
  styleUrl: './quiz-complete.component.css'
})
export class QuizCompleteComponent {
  @Input() correctAnswersCount: number = 0;
  @Input() totalQuestions: number = 0;
  @Input() quizTitle: string = '';
  @Input() quizIcon: string = '';
}
