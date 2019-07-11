/*
============================================
; Title:  app.routing.module.ts
; Author: Professor Krasso
; Date:   9 July 2019
; Modified By: Jordan Hennessy
; Description: Hello World
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
