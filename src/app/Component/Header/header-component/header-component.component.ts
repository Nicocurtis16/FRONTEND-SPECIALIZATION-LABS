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

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedButton$.subscribe((button) => {
      this.selectedButton = button;
      this.isButtonClicked = !!button; // Set to true when a button is selected
    });
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}
