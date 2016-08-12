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
  <button (click)="displayAll()" class="btn btn-primary" [class.btn-success]="showAll">Display all meals</button>
  <button (click)="displayHighCalorie()" class="btn btn-primary" [class.btn-success]="showHighCalorie">Display high calorie meals</button>
  <button (click)="displayLowCalorie()" class="btn btn-primary" [class.btn-success]="showLowCalorie">Display low calorie meals</button>

  <div class="all-meals" *ngIf="showAll">
    <meal-display *ngFor="#currentMeal of mealList"[meal]="currentMeal">
    </meal-display>
  </div>

  <div class="high-calorie-meals" *ngIf="showHighCalorie">
    <h3>High calorie meals:</h3>
    <meal-display *ngFor="#currentMeal of mealList | highcalorie" [meal]="currentMeal">
    </meal-display>
  </div>

  <div class="low-calorie-meals" *ngIf="showLowCalorie">
    <h3>Low calorie meals:</h3>
    <meal-display *ngFor="#currentMeal of mealList | lowcalorie" [meal]="currentMeal">
    </meal-display>
  </div>

  <new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>`
})

export class MealListComponent {
  public mealList: Meal [];

  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;

  public showAll = true;
  public showHighCalorie = false;
  public showLowCalorie = false;


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

  displayHighCalorie(): void {
    this.showHighCalorie = true;
    this.showLowCalorie = false;
    this.showAll = false;
  }
  displayLowCalorie(): void {
    this.showHighCalorie = false;
    this.showLowCalorie = true;
    this.showAll = false;
  }
  displayAll(): void {
    this.showHighCalorie = false;
    this.showLowCalorie = false;
    this.showAll = true;
  }
}
