import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-line',
  standalone: true,
  templateUrl: './head-line.component.html',
  styleUrls: ['./head-line.component.css'],
})
export class HeadLineComponent {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'h4' = 'h1';
  @Input() text: string = '';
  @Input() color: string = '--primary-color'; // Color for the whole text


}
