import {Component, Input} from '@angular/core';
import {TextComponent} from "../text/text.component";

@Component({
  selector: 'app-data-length',
  standalone: true,
  imports: [
    TextComponent
  ],
  templateUrl: './data-length.component.html',
  styleUrl: './data-length.component.css'
})
export class DataLengthComponent {
  @Input() dataLength: number = 0; // Accepts the length from parent


}
