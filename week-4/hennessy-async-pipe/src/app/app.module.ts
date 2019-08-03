/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   3 August 2019
; Modified By: Jordan Hennessy
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FruitService } from './fruit.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
