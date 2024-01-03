import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFood } from '../../../../services/food.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() foods: IFood[];
  @Output() findFoods = new EventEmitter<{searchTerm: string}>();

  searchTerm = '';

  handleSearch(e: KeyboardEvent) {
   if(e.key === 'Enter') {
    this.findFoods.emit({searchTerm: this.searchTerm})

   }

  }


}
