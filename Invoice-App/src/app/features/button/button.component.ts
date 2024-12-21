import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {Input} from "@angular/core";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: string = '';

}
