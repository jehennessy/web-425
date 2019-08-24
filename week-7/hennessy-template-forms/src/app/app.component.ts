/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   24 August 2019
; Modified By: Jordan Hennessy
; Description: Exercise 7.2 Template-Driven Forms
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hennessy-template-forms';

  onSubmit(formData) {
    console.log(formData);
  }
}
