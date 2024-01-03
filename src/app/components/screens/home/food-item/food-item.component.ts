import { Component, Input } from '@angular/core';
import { IFood } from '../../../../services/food.interface';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {
  @Input() food: IFood

}
