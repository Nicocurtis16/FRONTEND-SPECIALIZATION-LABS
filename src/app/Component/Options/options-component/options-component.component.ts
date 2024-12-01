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
  @Input() options: string[] = []; // Accept options from parent
  @Input() correctAnswer: string = ''; // Correct answer to check against
  @Output() answerSubmitted = new EventEmitter<boolean>(); // Emit event when answer is submitted
  @Output() nextQuestionEvent = new EventEmitter<void>(); // Emit event for next question

  selectedOption: string = ''; // Store selected option
  isSubmitted: boolean = false; // Track if answer is submitted
  optionStyles: { [key: string]: string } = {}; // Store styles for options

  // Method to handle option selection
  selectOption(option: string) {
    if (!this.isSubmitted) {
      this.selectedOption = option;
      this.resetOptionStyles(); // Reset styles before updating
    }
  }

  // Method to submit answer
  submitAnswer() {
    if (this.selectedOption && !this.isSubmitted) {
      this.isSubmitted = true;
      // Set styles based on correctness of the selected option
      if (this.selectedOption === this.correctAnswer) {
        this.optionStyles[this.selectedOption] = 'border-green-500'; // Green for correct answer
        this.answerSubmitted.emit(true); // Emit correct answer
      } else {
        this.optionStyles[this.selectedOption] = 'border-red-500'; // Red for incorrect answer
        this.optionStyles[this.correctAnswer] = 'border-green-500'; // Highlight correct answer
        this.answerSubmitted.emit(false); // Emit incorrect answer
      }
    }
  }

  // Emit event for next question
  moveToNextQuestion() {
    this.nextQuestionEvent.emit(); // Emit event to parent component to load the next question
    this.resetForNextQuestion();
  }

  // Reset component state for next question
  private resetForNextQuestion() {
    this.selectedOption = '';
    this.isSubmitted = false;
    this.resetOptionStyles();
  }

  // Reset styles to avoid interference between selections
  private resetOptionStyles() {
    this.optionStyles = {};
  }

  // Get alphabet for options (A, B, C, etc.)
  getAlphabet(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }
}
