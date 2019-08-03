/*
============================================
; Title:  fruit.service.ts
; Author: Professor Krasso
; Date:   3 August 2019
; Modified By: Jordan Hennessy
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { Observable, of } from 'rxjs';

@Injectable()

export class FruitService {

  fruits: Fruit[] = [
    {id: 238, name: "Apple", pricePerPound: "$0.99", quantity: 293},
    {id: 256, name: "Banana", pricePerPound: "$0.79", quantity: 450},
    {id: 103, name: "Mango", pricePerPound: "$1.99", quantity: 203},
    {id: 382, name: "Orange", pricePerPound: "$1.09", quantity: 107},
    {id: 192, name: "Cherries", pricePerPound: "$4.99", quantity: 372}
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
