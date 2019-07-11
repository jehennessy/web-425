/*
============================================
; Title:  hennessy-assignment-1.4.ts
; Author: Professor Krasso
; Date:   9 July 2019
; Modified By: Jordan Hennessy
; Description: TypeScript
;===========================================
*/

let firstName: string = 'Jordan';
let lastName: string = 'Hennessy';

function myName(firstName: string, lastName: string): string{
    return 'Hello my name is ' + firstName + ' ' + lastName;
};

console.log(myName(firstName, lastName));