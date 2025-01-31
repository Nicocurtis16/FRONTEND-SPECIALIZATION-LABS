import { Component } from '@angular/core';
import {IconComponent} from "../../../shared/component/icon/icon.component";
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";

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
