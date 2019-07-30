/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   29 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 4.3 Handling Form Events with Observables
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
