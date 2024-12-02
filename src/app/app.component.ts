import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponentComponent} from "./Component/Header/header-component/header-component.component";
import {HomeComponentComponent} from "./Component/Home/home-component/home-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuizApp';
}
