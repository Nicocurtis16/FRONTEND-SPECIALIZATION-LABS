import { Component } from '@angular/core';
import {IconComponent} from "../../features/icon/icon.component";
import {ThemeToggleComponent} from "../../features/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    IconComponent,
    ThemeToggleComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
