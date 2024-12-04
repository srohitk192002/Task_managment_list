import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  onFilterChange(status: string): void {
    this.filterChange.emit(status);
  }
}
