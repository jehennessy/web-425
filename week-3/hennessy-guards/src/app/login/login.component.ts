/*
============================================
; Title:  login.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 3.4 Guarding Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1 class="home">You Can Login Here!</h1>
  `,
  styles: [`
    .home {
      background-color: lightsteelblue;
      text-align: center;
      color: #fff;
      padding: 50px;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
