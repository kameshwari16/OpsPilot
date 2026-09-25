import { DatePipe } from '@angular/common';
import { Component,computed,effect,signal,linkedSignal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Incident } from '../../models/incident.model';
import { IncidentStatusPipe } from '../../../../incidentStatus.pipe';
import { SeverityHighlightDirective } from '../../../../severity-highligh.directive';
import { IncidentCard } from '../incident-card/incident-card';
import { FilterBar } from '../filter-bar/filter-bar';
import { PageHeader } from '../page-header/page-header';
import { Panel } from '../panel/panel';
import { IncidentWorkspaceService } from '../../data-access/incident-workspace.service';

type SeverityFilter='All'|'Low'|'Critical'|'Medium';

@Component({
  imports: [DatePipe, FormsModule, IncidentStatusPipe, SeverityHighlightDirective, IncidentCard, FilterBar, PageHeader, Panel],
  selector: 'app-incident-list',
  styleUrl: './incident-list.css',
  templateUrl: './incident-list.html',
  standalone:true
})
export class IncidentList {

  readonly workspace=inject(IncidentWorkspaceService);

  constructor(){
    effect(()=>{
      localStorage.setItem(
      'Ops-pilot-severity-filter',
      this.selectedSeverity()
    );
    })

    const savedSeverity=localStorage.getItem('Ops-pilot-severity-filter')

    if(savedSeverity==='All'|| savedSeverity==='Critical' || savedSeverity==='Low' || savedSeverity==='Medium'){
      this.selectedSeverity.set(savedSeverity)
    }
    
  }

  title = 'Incident Queue';

  isLoading =false;

  searchText=signal('');
  selectedSeverity = linkedSignal(()=>
    this.SeverityOptions()[0] ?? 'All'
  );
  selectedStatus=signal<'All'| 'Open'|'Resolved'>('All');
  selectedDirection=signal<'asc'|'dsc'>('asc');  

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

  SeverityOptions=signal<SeverityFilter []>([
    'Critical',
    'Low',
    'Medium'
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
    const status=this.selectedStatus();

    return this.incidents().filter(incident=>{
      const matchesSearch= incident.title.toLowerCase().includes(search);
      const matchesSeverity= severity==='All' || incident.severity===severity;
      const matchesStatus=status==='All' || incident.status===status;
      return matchesSearch && matchesSeverity && matchesStatus;
    });

  });

  sortedIncidents=computed(()=>{
    const incidents=this.filteredIncidents();
    const direction=this.selectedDirection();
    return [...incidents].sort((a,b)=>{//sort expects a negative/posive/zero
      const comparision=a.title.localeCompare(b.title);//returns a negative number if a comes first,postive if a comes after b, 0 if both are equal
      return direction==='asc'?comparision: -comparision;//reverse the order
    }
    )
  })

  criticalIncidentsCount=computed(()=>{

    return this.incidents().filter(incident=>
      incident.severity==='Critical'
    ).length
  });

  totalCount=computed(()=>{
    return this.incidents().length;
  })

  openCount=computed(()=>{
    return this.incidents().filter(incident=>
      incident.status==='Open'
    ).length
  });

  updateSearch(value:string){
    this.searchText.set(value);
  }

  updateSeverity(value:string){
    if(value==='All' || value==='Low'|| value==='Medium'||value==='Critical'){
      this.selectedSeverity.set(value);
    }
  }

  updateStatus(value: string) {
  if (
    value === 'All' ||
    value === 'Open' ||
    value === 'Resolved'
  ) {
    this.selectedStatus.set(value);
  }
}

  toggleSort(){
    this.selectedDirection.update(current=>
      current==='asc'?'dsc':'asc'
    );
  };

  selectedIncident(id:number){
    this.workspace.selectIncident(id);
  }

};
