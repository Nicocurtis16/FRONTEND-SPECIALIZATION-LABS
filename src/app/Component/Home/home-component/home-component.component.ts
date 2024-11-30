import { Component } from '@angular/core';
import { ButtonConfig } from '../../Button/button-component/button.interface';

import {ButtonComponentComponent} from "../../Button/button-component/button-component.component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    ButtonComponentComponent
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  iconPath: string = '';


  ngOnInit() {
    // Simulating fetching data from a JSON file
    const jsonData = { icon: 'assets/images/icon-html.svg' };
    this.iconPath = jsonData.icon;
  }

  handleButtonClick(button: any) {
    console.log('Clicked button data:', button);
    // Perform any action with button data
  }

}
