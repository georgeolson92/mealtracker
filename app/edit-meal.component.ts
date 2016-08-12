import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],

  template: `
    <br>
    <input [(ngModel)]='meal.name'>
    <input [(ngModel)]='meal.details'>
    <input [(ngModel)]='meal.calories'>
  `
})

export class EditMealComponent {

}
