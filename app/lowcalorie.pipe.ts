import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "lowcalorie"
})
export class LowCaloriePipe implements PipeTransform {
  transform(value, args?) {
    let [mealCalories] = args;

    return value.filter(meal => {
      return meal.calories <= 500;
    });
  }
}
