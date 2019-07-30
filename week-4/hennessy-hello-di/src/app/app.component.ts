/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   29 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 4.2 Inversion of Control and Dependency Injection
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hennessy-hello-di';
}
