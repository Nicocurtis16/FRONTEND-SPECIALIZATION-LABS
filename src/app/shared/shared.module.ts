import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";

import { HeadLineComponent } from '../features/head-line/head-line.component';
import { TextComponent } from '../features/text/text.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    HeadLineComponent,
    TextComponent,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    HeadLineComponent,
    TextComponent
  ]
})
export class SharedModule { }
