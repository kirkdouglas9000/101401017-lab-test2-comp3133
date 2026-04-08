import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../services/spacex.service';
import { Mission } from '../models/mission';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MissionfilterComponent, MissiondetailsComponent],
  templateUrl: './missionlist.component.html'
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];

  
  selectedMission!: Mission;

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }

  
  filterByYear(year: string) {
    if (year) {
      this.spacexService.getMissionsByYear(year).subscribe(data => {
        this.missions = data;
      });
    } else {
      this.ngOnInit();
    }
  }


  selectMission(mission: Mission) {
    this.selectedMission = mission;
  }
}