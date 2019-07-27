/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 3.4 Guarding Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">Welcome to Guarding Routes Example!</h1>
  `,
  styles: [`
    .home {
      background-color: darkseagreen;
      text-align: center;
      color: #fff;
      padding: 50px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
