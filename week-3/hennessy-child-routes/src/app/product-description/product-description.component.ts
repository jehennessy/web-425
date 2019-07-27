/*
============================================
; Title:  product-description.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 3.3 Child Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
      This product is the best of the best! MUST HAVE NOW!
    </p>
  `,
  styles: [`
    p {
      color: rosybrown;
    }
  `]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
