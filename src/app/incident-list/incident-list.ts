import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Incident } from '../features/incidents/models/incident.model';
import { IncidentStatusPipe } from '../incidentStatus.pipe';
import { SeverityHighlightDirective } from '../severity-highligh.directive';

@Component({
  imports: [DatePipe,FormsModule,IncidentStatusPipe,SeverityHighlightDirective],
  selector: 'app-incident-list',
  styleUrl: './incident-list.css',
  templateUrl: './incident-list.html',
  standalone:true
})
export class IncidentList {

  title = 'Incident Queue';

  isLoading =false;

  searchText='';

  incidents: Incident[] = [
    {
      id: 101,
      title: 'Payment Gateway Failure',
      description: 'Customers are unable to complete payments.',
      severity: 'Critical',
      status: 'Open',
      createdAt: new Date('2026-09-13T08:30:00')
    },
    {
      id: 102,
      title: 'Search API Latency',
      description: 'Search response time has increased.',
      severity: 'Medium',
      status: 'Investigating',
      createdAt: new Date('2026-09-12T15:20:00')
    },
    {
      id: 103,
      title: 'Email Notification Delay',
      description: 'Notification emails are delayed.',
      severity: 'Low',
      status: 'Resolved',
      createdAt: new Date('2026-09-11T10:15:00')
    }
  ];
  acknowledgeIncident(id:number){
    console.log('Acknowledging incident:',id);
  }
}
