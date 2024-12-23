import { Component } from '@angular/core';
import {ThemeToggleComponent} from "../../features/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ThemeToggleComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
