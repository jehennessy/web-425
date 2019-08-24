/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   24 August 2019
; Modified By: Jordan Hennessy
; Description: Exercise 7.3 Form Validation
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hennessy-form-validation';

  onSubmit(formData) {
    console.log(formData);
  }
}
