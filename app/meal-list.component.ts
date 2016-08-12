import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent],
  template: `
  <h2>Today's meals:</h2>
  <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal">
  </meal-display>`
})

export class MealListComponent {
  public mealList: Meal [];

  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }
}
