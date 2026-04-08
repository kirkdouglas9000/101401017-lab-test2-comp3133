import { Component } from '@angular/core';
import { MissionlistComponent } from './missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MissionlistComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}