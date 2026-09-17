import { Component,input } from '@angular/core';
export type IncidentStatus=
  | 'Open'
  | 'Investigating'
  | 'Resolved'
@Component({
  imports: [],
  selector: 'app-status-badge',
  styleUrl: './status-badge.css',
  templateUrl: './status-badge.html',
})
export class StatusBadge {
  status=input.required<IncidentStatus>();
}
