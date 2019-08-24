/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   24 August 2019
; Modified By: Jordan Hennessy
; Description: Exercise 7.2 Template-Driven Forms
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
