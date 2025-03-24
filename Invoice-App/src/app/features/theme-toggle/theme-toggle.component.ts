import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../service/theme.service";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent implements OnInit {

  isDarkTheme!: boolean ;
  constructor(private themeService: ThemeService) {}
ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
}
  toggleTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme')
    }else {
      document.body.classList.remove('dark-theme');
    }
    this.themeService.toggleTheme();
  }

  get currentTheme() {
    return this.themeService.getTheme();
  }
}
