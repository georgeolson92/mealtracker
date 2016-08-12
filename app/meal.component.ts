import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
      <div class="meal">
        <h3>{{ meal.name }}</h3>
        <h4>Details: {{ meal.details }}</h4>
        <h4>Calories: {{ meal.calories }}</h4>
        <button (click)="editMeal()" class="btn btn-primary" *ngIf="!beingEdited">Edit</button>
        <edit-meal *ngIf="beingEdited" [meal]="meal"></edit-meal>
        <button (click)="editMeal()" class="btn btn-primary" *ngIf="beingEdited">Done</button>
      </div>
  `
})

export class MealComponent {
  public meal: Meal;
  public beingEdited: boolean = false;

  editMeal() {
    this.beingEdited = (!this.beingEdited);
  }
}
