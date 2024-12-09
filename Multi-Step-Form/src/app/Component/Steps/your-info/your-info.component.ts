import { Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule,} from "@angular/forms";

@Component({
  selector: 'app-your-info',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './your-info.component.html',
  styleUrl: './your-info.component.css'
})
export class YourInfoComponent {

}
