import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-head-line',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './head-line.component.html',
  styleUrls: ['./head-line.component.css']
})
export class HeadLineComponent {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'h4' = 'h1';
  @Input() text: string = '';
}
