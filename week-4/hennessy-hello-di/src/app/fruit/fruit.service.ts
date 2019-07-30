/*
============================================
; Title:  fruit.service.ts
; Author: Professor Krasso
; Date:   29 July 2019
; Modified By: Jordan Hennessy
; Description: Exercise 4.2 Inversion of Control and Dependency Injection
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable()
export class FruitService {
  getFruit(): Fruit {
    return new Fruit( 293, "Apple", "Red");
  }
}
