import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-options-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-component.component.html',
  styleUrls: ['./options-component.component.css']
})
export class OptionsComponentComponent {
  @Input() options: string[] = [];  // Accept options from parent

  getAlphabet(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }
}
