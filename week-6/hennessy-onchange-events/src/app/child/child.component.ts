/*
============================================
; Title:  child.component.ts
; Author: Professor Krasso
; Date:   17 August 2019
; Modified By: Jordan Hennessy
; Description: Assignment 6.4 OnChange Events
;===========================================
*/
import { Component, SimpleChanges, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div class="greeting">Greeting: {{ greeting }}</div>
      <div class="name">User name: {{ user.name }}</div>
    </div>
  `,
  styles: [`
    .child {
      background: lightgray;
      padding: 1em;
      margin-top: 3em;
    }
    .name {
      margin-top: 1em;
    }
  `]
})
export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
