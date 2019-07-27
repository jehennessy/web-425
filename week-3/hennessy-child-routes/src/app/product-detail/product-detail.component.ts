/*
============================================
; Title:  product-detail.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 3.3 Child Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Product {{productId}} Details</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `,
  styles: [`
    .product {
      color: blanchedalmond;
      margin: 20px auto;
      width: 80%;
    }
    a {
      color: olivedrab;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 1937;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
