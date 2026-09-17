import { DatePipe } from '@angular/common';
import { Component,computed,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Incident } from '../../models/incident.model';
import { IncidentStatusPipe } from '../../../../incidentStatus.pipe';
import { SeverityHighlightDirective } from '../../../../severity-highligh.directive';
import { IncidentCard } from '../incident-card/incident-card';
import { FilterBar } from '../filter-bar/filter-bar';
import { PageHeader } from '../page-header/page-header';
import { Panel } from '../panel/panel';

@Component({
  imports: [DatePipe, FormsModule, IncidentStatusPipe, SeverityHighlightDirective, IncidentCard, FilterBar, PageHeader, Panel],
  selector: 'app-incident-list',
  styleUrl: './incident-list.css',
  templateUrl: './incident-list.html',
  standalone:true
})
export class IncidentList {

  title = 'Incident Queue';

  isLoading =false;

  searchText=signal('');
  selectedSeverity = signal('All');

  incidents=signal<Incident[]>([
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
  ]);
  acknowledgeIncident(id:number){
    console.log('Acknowledging incident:',id);
  }
  assignIncident(id:number){
    this.incidents.update(incidents=>
      incidents.map(
        incident=>
          incident.id===id?
        {...incident,status:'Investigating'}:
        incident
      )
    )
  }

  filteredIncidents=computed(()=>{
    const search=this.searchText().toLowerCase();
    const severity=this.selectedSeverity();

    return this.incidents().filter(incident=>{
      const matchesSearch= incident.title.toLowerCase().includes(search);
      const matchesSeverity= severity==='All' || incident.severity===severity;

      return matchesSearch && matchesSeverity;
    });

  });
}
