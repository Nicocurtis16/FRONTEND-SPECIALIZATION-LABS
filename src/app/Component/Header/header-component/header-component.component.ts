import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }



}