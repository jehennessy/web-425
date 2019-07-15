/*
============================================
; Title:  shipping.component.ts
; Author: Professor Krasso
; Date:   14 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 1.5 Modules
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Hello this is the ShippingComponent
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
