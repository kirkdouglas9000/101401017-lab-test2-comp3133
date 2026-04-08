import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html'
})
export class MissionfilterComponent {

  @Output() yearSelected = new EventEmitter<string>();

  searchYear(year: string) {
    this.yearSelected.emit(year);
  }
}