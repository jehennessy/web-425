/*
============================================
; Title:  fruit.component.ts
; Author: Professor Krasso
; Date:   29 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 4.2 Inversion of Control and Dependency Injection
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FruitService } from "./fruit.service";
import { Fruit } from "./fruit";

@Component({
  selector: 'app-fruit',
  template: `
    <div class="container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin: 20px auto;
      width: 80%;
    }
    .tbl-header {
      color: #fff;
      background-color: teal;
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {
  fruit: Fruit;
  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
   }

  ngOnInit() {
  }

}
