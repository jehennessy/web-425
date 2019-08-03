/*
============================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   3 August 2019
; Modified By: Jordan Hennessy
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
