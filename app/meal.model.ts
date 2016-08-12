import { Component } from 'angular2/core';

export class Meal {
  public cart: boolean = false;
  constructor(public name: string, public details: string, public calories: number){}
}
