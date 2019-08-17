/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   17 August 2019
; Modified By: Jordan Hennessy
; Description: Assignment 6.4 OnChange Events
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hennessy-onchange-events';

  myGreeting = 'hello';
  myUser: { name: string } = { name: 'Jordan' }
}
