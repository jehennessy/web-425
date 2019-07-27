/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 3.3 Child Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Hello!</h1>
      <h2>Take a Look at Our Products!</h2>
    </div>
  `,
  styles: [`
    .container {
      margin: 20px auto;
      width: 80%;
    }
    h1 {
      color: rosybrown;
    }
    h2 {
      color: peru;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
