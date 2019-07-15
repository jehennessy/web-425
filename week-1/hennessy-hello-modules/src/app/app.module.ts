/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   14 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 1.5 Modules
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShippingModule } from "./shipping/shipping.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
