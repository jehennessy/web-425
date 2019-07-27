/*
============================================
; Title: login.guard.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 3.4 Guarding Routes
;===========================================
*/
import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You're not logged in and will be redirected to Login page");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
