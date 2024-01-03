import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    FoodItemComponent,
    FiltersComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

})
export class HomeModule { }
