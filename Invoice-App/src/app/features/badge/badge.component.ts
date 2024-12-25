import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() status: 'paid' | 'pending' | 'draft' = 'pending';
}
