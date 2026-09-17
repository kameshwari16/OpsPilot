import { Component,input, output } from '@angular/core';
import { StatusBadge } from '../status-badge/status-badge';
export interface Incident{
  id: number;
  title: string;
  description: string;
  status: 'Open' | 'Investigating' | 'Resolved';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}
@Component({
  imports: [StatusBadge],
  selector: 'app-incident-card',
  styleUrl: './incident-card.css',
  templateUrl: './incident-card.html',
})
export class IncidentCard {
  incident=input.required<Incident>();

  assignClicked=output<number>();

  assignIncident(){
    this.assignClicked.emit(this.incident().id);
  }
  
}
