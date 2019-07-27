/*
============================================
; Title: unsaved-changes.guard.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 3.4 Guarding Routes
;===========================================
*/
import { CanDeactivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductComponent } from "./product/product.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm("Wait! You haven't saved your changes yet! You sure you want to leave?");
    } else {
      return true;
    }
  }
}
