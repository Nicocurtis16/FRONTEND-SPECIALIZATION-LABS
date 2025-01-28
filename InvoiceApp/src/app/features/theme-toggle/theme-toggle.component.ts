import {Component, } from '@angular/core';
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
export class ThemeToggleComponent  {
  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }
}
