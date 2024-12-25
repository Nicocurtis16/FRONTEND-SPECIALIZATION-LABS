import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  @Input() variant: 'body1' | 'body2' = 'body1';
  @Input() text: string = '';
  @Input() color: string = '--primary-color'; // Default color using CSS variable
}
