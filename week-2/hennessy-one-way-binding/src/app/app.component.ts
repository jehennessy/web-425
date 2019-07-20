/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 2.2 One-Way Binding
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
    `,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  title = 'hennessy-one-way-binding';


  // class property
  name:string = "Jordan Hennessy";

  //change name function
  changeName() {
    this.name = "Jordan Elizabeth Hennessy";
  }
}
