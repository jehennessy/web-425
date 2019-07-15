/*
============================================
; Title:  shipping.module.ts
; Author: Professor Krasso
; Date:   14 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 1.5 Modules
;===========================================
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  exports: [ShippingComponent],
  imports: [
    CommonModule
  ]
})
export class ShippingModule { }
