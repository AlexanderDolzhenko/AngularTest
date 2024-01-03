import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
@Output() filterFoods = new EventEmitter<{ type: string}>()

type = ''


handleFilter(type: string) {
  this.type = type
    this.filterFoods.emit({type})

}
}
