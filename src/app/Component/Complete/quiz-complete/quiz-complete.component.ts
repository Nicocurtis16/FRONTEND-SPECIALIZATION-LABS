import { Component } from '@angular/core';
import {ButtonComponentComponent} from "../../Button/button-component/button-component.component";

@Component({
  selector: 'app-quiz-complete',
  standalone: true,
  imports: [
    ButtonComponentComponent
  ],
  templateUrl: './quiz-complete.component.html',
  styleUrl: './quiz-complete.component.css'
})
export class QuizCompleteComponent {

}
