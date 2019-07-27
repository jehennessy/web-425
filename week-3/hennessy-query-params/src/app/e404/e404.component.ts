/*
============================================
; Title:  e404.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 3.2 Passing Data to Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Oh No! This Page Was Not Found!</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: lightcoral;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
