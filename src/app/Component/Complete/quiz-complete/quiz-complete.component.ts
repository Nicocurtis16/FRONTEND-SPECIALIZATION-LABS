import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-complete',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="quiz-completed" style="border: 3px solid red">
      <h3>Quiz Completed!</h3>
      <p>You scored {{ correctAnswersCount }} out of {{ totalQuestions }}</p>
    </div>
  `
})
export class QuizCompleteComponent {
  @Input() correctAnswersCount: number = 0;
  @Input() totalQuestions: number = 0;
}
