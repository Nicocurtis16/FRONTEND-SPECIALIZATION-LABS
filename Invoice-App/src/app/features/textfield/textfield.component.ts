import { Component, input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldProps } from '../invoice';
@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class TextfieldComponent {
  readonly fieldProps = input.required<FieldProps>();
  readonly controlName = input.required<string>();
}
