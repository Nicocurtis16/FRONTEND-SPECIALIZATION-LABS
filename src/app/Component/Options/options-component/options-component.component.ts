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
  @Input() correctIcon: string = 'src/assets/images/correct.svg';
  @Input() incorrectIcon: string = 'src/assets/images/wrong.svg';

  @Output() answerSubmitted = new EventEmitter<boolean>();
  @Output() nextQuestionEvent = new EventEmitter<void>();

  selectedOption: string = '';
  isSubmitted: boolean = false;

  // Track styles for each option
  optionState: { [key: string]: string } = {};

  selectOption(option: string) {
    if (!this.isSubmitted) {
      this.selectedOption = option;
    }
  }

  submitAnswer() {
    if (this.selectedOption && !this.isSubmitted) {
      this.isSubmitted = true;
      const isCorrect = this.selectedOption === this.correctAnswer;

      // Reset all option states
      this.optionState = {};

      if (isCorrect) {
        // If correct, set selected option to correct
        this.optionState[this.selectedOption] = 'correct';
      } else {
        // If incorrect, set selected option to incorrect
        // and correct answer to correct
        this.optionState[this.selectedOption] = 'incorrect';
        this.optionState[this.correctAnswer] = 'correct';
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
    this.optionState = {};
  }

  getAlphabet(index: number): string {
    return String.fromCharCode(65 + index);
  }

  // Method to determine label border class
  getLabelBorderClass(option: string): string {
    if (!this.isSubmitted) return '';

    switch(this.optionState[option]) {
      case 'correct': return 'border-green-500';
      case 'incorrect': return 'border-red-500';
      default: return '';
    }
  }

  // Method to determine index panel class
  getIndexPanelClass(option: string): string {
    if (!this.isSubmitted) return '';

    switch(this.optionState[option]) {
      case 'correct': return 'correct-panel';
      case 'incorrect': return 'incorrect-panel';
      default: return '';
    }
  }

  // Method to determine index text class
  getIndexTextClass(option: string): string {
    if (!this.isSubmitted) return '';

    switch(this.optionState[option]) {
      case 'correct': return 'correct-index';
      case 'incorrect': return 'incorrect-index';
      default: return '';
    }
  }

  // Method to get icon for option
  getOptionIcon(option: string): string {
    if (!this.isSubmitted) return '';

    switch(this.optionState[option]) {
      case 'correct': return 'src/assets/images/correct.svg';
      case 'incorrect': return 'src/assets/images/wrong.svg';
      default: return '';
    }
  }
}
