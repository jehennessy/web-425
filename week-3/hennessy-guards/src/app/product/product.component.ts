/*
============================================
; Title:  product.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 3.4 Guarding Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <h1 class="product">See The Product Details</h1>
    <input placeholder="Enter your name" type="text" [formControl]="name">
  `,
  styles: [`
    .product {
      background-color: thistle;
      text-align: center;
      color: #fff;
      padding: 50px;
    }
    input {
      margin: 50px auto;
      display: block;
      padding: 10px 20px;
      width: 300px;
    }
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
