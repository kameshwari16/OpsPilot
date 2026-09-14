import { Component } from '@angular/core';
import { IncidentList } from '../../incident-list/incident-list';

@Component({
  imports: [IncidentList],
  selector: 'app-incidents',
  styleUrl: './incidents.css',
  templateUrl: './incidents.html',
})
export class Incidents {}
