import { Component, OnInit } from '@angular/core';
import { IFood } from '../../../services/food.interface';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  foods: IFood[] = [];

  filteredFoods: IFood[] = [];


  constructor(private foodService:FoodService) {}

  ngOnInit(){
    this.foodService.getAll().subscribe(data => {
      this.foods = Array.isArray(data) ? data : [data];
      this.filteredFoods = Array.isArray(data) ? data : [data];
    })
  }

  onSearch(eventData: {searchTerm: string}) {
    this.filteredFoods = this.foods.filter(food => food.title.toLowerCase().includes(eventData.searchTerm.toLowerCase()))
  }

  onFilter(eventData: {type: string}) {
    this.filteredFoods = this.foods.filter(food => food.type === eventData.type)
  }
}
