import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  template: `
    <div class="slider-overlay" [class.visible]="isVisible" (click)="closeSlider()">
      <div class="slider-content" (click)="$event.stopPropagation()">
        <ng-content></ng-content> <!-- This will render the form component -->
      </div>
    </div>
  `,  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() isVisible = false; // Controls slider visibility
  @Output() closed = new EventEmitter<void>(); // Emits when the slider is closed

  closeSlider() {
    this.isVisible = false;
    this.closed.emit();
  }
}
