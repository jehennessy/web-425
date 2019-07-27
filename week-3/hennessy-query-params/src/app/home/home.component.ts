/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 3.2 Passing Data to Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome to Query Params Example Home Page!</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: lightseagreen;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
