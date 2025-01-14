import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css'
})
export class TextFieldComponent {
  @Input() inputId: string = '';
  @Input() controlName!: FormControl;
  @Input() label: string = '';
  @Input() type: 'text'|'number'|'email'|'password' = 'text';
  @Input() placeholder: string = '';


  get isInvalid(): boolean{
    return Boolean(this.controlName?.touched && this.controlName?.errors);
  }

  get errorMessage(): string {
    if (!this.controlName?.errors || !this.controlName?.touched) {
      return '';
    }
  
    const firstError = Object.keys(this.controlName.errors)[0];
    return this.getErrorMessage(firstError, this.controlName.errors[firstError]);
  }
  

  private getErrorMessage(errorType: string, errorValue: any): string {
    const messages: Record<string, string> = {
      required: 'This field is required',
      email: 'Invalid email address',
      min: `Minimum value is ${errorValue.min}`,
      max: `Maximum value is ${errorValue.max}`,
      minlength: `Minimum length is ${errorValue.requiredLength} characters`,
      maxlength: `Maximum length is ${errorValue.requiredLength} characters`,
      pattern: 'Invalid format'
    };

    return messages[errorType] || 'Invalid value';
  }

}
