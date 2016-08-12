import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add a new meal to inventory:</h3>
    <input placeholder="Name" #newName>
    <input placeholder="Details" #newDetails>
    <input placeholder="Calories" #newCalories type="number">
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-primary">Add</button>
  </div>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    var newMeal = new Meal(userName.value, userDetails.value, parseInt(userCalories.value));
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
    this.onSubmitNewMeal.emit(newMeal);
  }
}
