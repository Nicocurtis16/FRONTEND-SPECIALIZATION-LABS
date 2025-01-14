import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() variant: string = '';  // Input for variant (e.g., 'edit', 'delete', 'marked-as-paid')
  @Output() onClick = new EventEmitter<void>();  // Output event for the click action

  handleClick() {
    if (!this.disabled) {  // Ensure that click doesn't happen if button is disabled
      this.onClick.emit();  // Emit the click event when the button is clicked
    }
  }
}
