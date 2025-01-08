import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `<img [src]="iconPath" [alt]="alt || name" class="icon" />`,

  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() style: string = '';
  @Input() name!: string; // Icon name without path
  @Input() alt: string = ''; // Optional alt text

  get iconPath(): string {
    return `assets/images/${this.name}.svg`; // Construct the full path
  }
}
