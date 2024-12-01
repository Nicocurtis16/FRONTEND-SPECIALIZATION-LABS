import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-options-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './options-component.component.html',
  styleUrls: ['./options-component.component.css']
})
export class OptionsComponentComponent {
  @Input() options: string[] = [];
  @Input() correctAnswer: string = '';
  @Output() answerSubmitted = new EventEmitter<boolean>();
  @Output() nextQuestionEvent = new EventEmitter<void>();

  selectedOption: string = '';
  isSubmitted: boolean = false;
  optionStyles: { [key: string]: string } = {};

  selectOption(option: string) {
    if (!this.isSubmitted) {
      this.selectedOption = option;
      this.resetOptionStyles();
    }
  }

  submitAnswer() {
    if (this.selectedOption && !this.isSubmitted) {
      this.isSubmitted = true;
      const isCorrect = this.selectedOption === this.correctAnswer;

      if (isCorrect) {
        this.optionStyles[this.selectedOption] = 'border-green-500';
      } else {
        this.optionStyles[this.selectedOption] = 'border-red-500';
        this.optionStyles[this.correctAnswer] = 'border-green-500';
      }

      this.answerSubmitted.emit(isCorrect);
    }
  }

  moveToNextQuestion() {
    this.nextQuestionEvent.emit();
    this.resetForNextQuestion();
  }

  private resetForNextQuestion() {
    this.selectedOption = '';
    this.isSubmitted = false;
    this.resetOptionStyles();
  }

  private resetOptionStyles() {
    this.optionStyles = {};
  }

  getAlphabet(index: number): string {
    return String.fromCharCode(65 + index);
  }
}
