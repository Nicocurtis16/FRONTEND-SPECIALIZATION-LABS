import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadLineComponent } from '../features/head-line/head-line.component';
import { TextComponent } from '../features/text/text.component';

@NgModule({

  imports: [
    CommonModule,
    HeadLineComponent,
    TextComponent,
  ],
  exports: [
    HeadLineComponent,
    TextComponent
  ]
})
export class SharedModule { }
