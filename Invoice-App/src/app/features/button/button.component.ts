import {Component, EventEmitter, Input,Output} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: string = ''; // Class for styling or logic-specific behavior
  @Input() onClick: () => void = () => {}; // Optional click handler
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();

    if (this.onClick) {
      this.onClick();
    }
  }
}
