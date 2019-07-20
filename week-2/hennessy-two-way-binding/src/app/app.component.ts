import { Component } from '@angular/core';
/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 2.3 Two-Way Binding
;===========================================
*/
@Component({
  selector: 'app-root',
  template: `
    <br /><br /><br />

    <div class="container-fluid two-way-form">
      <h2>Two-Way Binding Example</h2><br />
      <div class="form-group">
        <input class="form-control" type="text"
                      placeholder="What's your name ..."
                      [(ngModel)]="name">
        <br />
        <button class="btn btn-info form-control" (click)="name=''">Clear Name</button>
      </div>

      <div class="form-group">
        <p class="alert-info">Hello {{name}}! </p>
      </div>

    </div>
  `,
  styles: [
    `
      h2 {
        color: #17a2b8;
      }
      .two-way-form {
        width: 50%;
      }
    `
  ]
})
export class AppComponent {
  name: string;
}
