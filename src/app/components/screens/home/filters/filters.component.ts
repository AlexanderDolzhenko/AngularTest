import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
@Output() filterFoods = new EventEmitter<{ type: string}>()


handleFilter(type: string) {

    this.filterFoods.emit({type})

}
}