import { Component, Input } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  imports: [
    NgIf,
    NgForOf,
  ]
})
export class TextComponent {
  @Input() variant: 'body1' | 'body2' = 'body1';
  @Input() text: any = '';
  @Input() lines: string[] | null = null;
  @Input() alignment: string = 'left';
  @Input() color: string = '--primary-color'; // Default color using CSS variable
}
