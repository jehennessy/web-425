/*
============================================
; Title:  user.component.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 3.2 Passing Data to Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>User Detail for User: {{ userId }}</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: teal;
    }
  `]
})
export class UserComponent implements OnInit {

  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
