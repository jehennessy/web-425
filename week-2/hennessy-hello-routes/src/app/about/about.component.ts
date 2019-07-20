/*
============================================
; Title:  about.component.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 2.4 Routing in Action
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <h2>Learn About Us!</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      h2 {
        color: RebeccaPurple;
      }
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
