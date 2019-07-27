/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   27 July 2019
; Modified By: Jordan Hennessy
; Description: Assignment 3.4 Guarding Routes
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { LoginGuard } from "./login.guard";
import { UnsavedChangesGuard } from "./unsaved-changes.guard";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'product', component: ProductComponent, canActivate: [LoginGuard], canDeactivate: [UnsavedChangesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
