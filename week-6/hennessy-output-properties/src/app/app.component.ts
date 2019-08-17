/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   17 August 2019
; Modified By: Jordan Hennessy
; Description: Exercise 6.3 Output Properties
;===========================================
*/
import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice.quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hennessy-output-properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
