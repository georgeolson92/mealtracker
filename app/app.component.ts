import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <h1>Meal Tracker</h1>
    <meal-list [mealList]="meals"></meal-list>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
      this.meals = [];
    }
}
