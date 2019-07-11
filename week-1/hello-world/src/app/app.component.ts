/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   9 July 2019
; Modified By: Jordan Hennessy
; Description: Hello World
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World!';
}
