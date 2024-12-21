import { Component } from '@angular/core';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    ButtonComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
