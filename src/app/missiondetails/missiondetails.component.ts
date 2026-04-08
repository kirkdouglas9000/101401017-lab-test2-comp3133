import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html'
})
export class MissiondetailsComponent {
  @Input() mission!: Mission;
}