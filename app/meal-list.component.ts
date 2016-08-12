import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { HighCaloriePipe } from './highcalorie.pipe';
import { LowCaloriePipe } from './lowcalorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent],
  pipes: [HighCaloriePipe, LowCaloriePipe],
  template: `
  <h2>Today's meals:</h2>
  <meal-display *ngFor="#currentMeal of mealList"[meal]="currentMeal">
  </meal-display>

  <h3>High calorie meals:</h3>
  <meal-display *ngFor="#currentMeal of mealList | highcalorie" [meal]="currentMeal">
  </meal-display>

  <h3>Low calorie meals:</h3>
  <meal-display *ngFor="#currentMeal of mealList | lowcalorie" [meal]="currentMeal">
  </meal-display>

  <new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>`
})

export class MealListComponent {
  public mealList: Meal [];

  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;


  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  addMeal(meal: Meal){
    this.mealList.push(meal);
  }
}
