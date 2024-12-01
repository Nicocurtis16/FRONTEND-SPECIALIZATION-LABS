import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OptionsComponentComponent} from "../../Options/options-component/options-component.component";

@Component({
  selector: 'app-question-component',
  standalone: true,
  imports: [CommonModule, OptionsComponentComponent],
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent {
  @Input() questionData: any; // Accept data from parent component

  ngOnInit() {
    console.log('Received data:', this.questionData); // Check the received data
  }
}
