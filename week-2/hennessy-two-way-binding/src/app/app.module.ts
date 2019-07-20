/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 2.3 Two-Way Binding
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
