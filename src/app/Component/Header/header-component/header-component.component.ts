import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  selectedButton: { icon: string; title: string } | null = null;
  isButtonClicked: boolean = false;
  isDarkMode: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedButton$.subscribe((button) => {
      this.selectedButton = button;
      this.isButtonClicked = !!button; // Set to true when a button is selected
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
    // Force repaint
    document.body.style.display = 'none';
    document.body.offsetHeight; // no need to store this anywhere, the reference is enough
    document.body.style.display = '';
  }
}
