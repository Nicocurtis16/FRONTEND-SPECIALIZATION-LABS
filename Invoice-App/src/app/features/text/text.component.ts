import { Component,Input } from '@angular/core';
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-text',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
@Input() variant : 'body1' | 'body2' = 'body1';
@Input() text: string = '';
}
