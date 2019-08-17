/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   17 August 2019
; Modified By: Jordan Hennessy
; Description: Exercise 6.3 Output Properties
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PriceQuoteComponent } from './price-quote/price-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
